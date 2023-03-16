import { SendTransactionRequest } from '@tonconnect/sdk';
import { TonConnectUI, useTonAddress, useTonConnectUI } from '@tonconnect/ui-react';
import axios from 'axios';
import TonWeb from 'tonweb';
const { NftCollection, NftItem, NftMarketplace, NftSale } = TonWeb.token.nft;
const URL = 'https://tebdev.xyz';
const tonweb = new TonWeb(
  new TonWeb.HttpProvider('https://toncenter.com/api/v2/jsonRPC', {
    apiKey: 'e3527da67b176a2909489a09f6f1427399076af2f6080e7d497b451908aca7ed',
  }),
);

export const deployNftCollection = async (
  address: string,
  tonConnectUI: any,
  nftItemContentBaseUri: string,
) => {
  const WalletAddress = new TonWeb.utils.Address(address);

  console.log('nftItemContentBaseUri', nftItemContentBaseUri);
  const nftCollection = new NftCollection(tonweb.provider, {
    ownerAddress: WalletAddress,
    royalty: 0,
    royaltyAddress: WalletAddress,
    collectionContentUri: `${nftItemContentBaseUri}badge.json`,
    nftItemContentBaseUri: `${nftItemContentBaseUri}`,
    nftItemCodeHex: NftItem.codeHex,
  });

  const nftCollectionAddress = await nftCollection.getAddress();

  // collection address : EQA26bLllEJ6L3z5cRvAFUXPqhFjI7mYVbhanqqTRwd-eO6n
  // ton scan url : https://tonscan.org/nft/EQA26bLllEJ6L3z5cRvAFUXPqhFjI7mYVbhanqqTRwd-eO6n
  console.log('collection address=', nftCollectionAddress.toString(true, true, true));

  // check if the collection already exists
  const addresses = new Set();
  const walletHistory = await tonweb.getTransactions(WalletAddress);

  walletHistory.forEach((el: any) => {
    try {
      addresses.add(el.out_msgs[0].destination);
    } catch (e) {
      console.log('error', e);
    }
  });

  if (addresses.has(nftCollectionAddress.toString(true, true, true))) {
    console.log('Collection already exists');
  }
  const stateInit = (await nftCollection.createStateInit()).stateInit;
  const stateInitBoc = await stateInit.toBoc(false);
  const stateInitBase64 = TonWeb.utils.bytesToBase64(stateInitBoc);
  const amount = TonWeb.utils.toNano((0.05).toString());
  const myTransaction: SendTransactionRequest = {
    validUntil: Date.now() + 1000000,
    messages: [
      {
        address: nftCollectionAddress.toString(true, true, true),
        amount: amount.toString(),
        payload: undefined,
        stateInit: stateInitBase64,
      },
    ],
  };

  tonConnectUI.sendTransaction(myTransaction);
};

export const deployNftItem = async (
  address: string,
  tonConnectUI: any,
  nftItemContentBaseUri: string,
  mintAmount: number,
  id: number,
  owner: string,
) => {
  console.log('WalletAddress', address);
  console.log('Owneraddress', owner);

  const currentWallet = new TonWeb.utils.Address(address);
  const WalletAddress = new TonWeb.utils.Address(owner);

  const nftCollection = new NftCollection(tonweb.provider, {
    ownerAddress: WalletAddress,
    royalty: 0,
    royaltyAddress: WalletAddress,
    collectionContentUri: `${nftItemContentBaseUri}badge.json`,
    nftItemContentBaseUri: `${nftItemContentBaseUri}`,
    nftItemCodeHex: NftItem.codeHex,
  });

  const nftCollectionAddress = await nftCollection.getAddress();

  console.log('collection address=', nftCollectionAddress.toString(true, true, true));

  const amount = TonWeb.utils.toNano((0.05).toString());
  const bodyObj = {
    amount,
    itemIndex: 0,
    itemContentUri: 'badge.json',
    itemOwnerAddress: currentWallet,
  };
  const body = await nftCollection.createMintBody(bodyObj);

  const bodyBoc = await body.toBoc(false);
  const bodyBase64 = TonWeb.utils.bytesToBase64(bodyBoc);

  const myTransaction: SendTransactionRequest = {
    validUntil: Date.now() + 1000000,
    messages: [
      {
        address: nftCollectionAddress.toString(true, true, true),
        amount: amount.toString(),
        payload: bodyBase64,
        stateInit: undefined,
      },
    ],
  };

  tonConnectUI.sendTransaction(myTransaction);
  await axios.put(`${URL}/badges/${id}`);
};
