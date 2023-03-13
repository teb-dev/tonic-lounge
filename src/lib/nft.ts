import { useTonAddress, useTonConnectUI } from '@tonconnect/ui-react';
import TonWeb from 'tonweb';

const { NftCollection, NftItem, NftMarketplace, NftSale } = TonWeb.token.nft;
const tonweb = new TonWeb(
  new TonWeb.HttpProvider('https://toncenter.com/api/v2/jsonRPC', {
    apiKey: 'e3527da67b176a2909489a09f6f1427399076af2f6080e7d497b451908aca7ed',
  }),
);

//const walletAddress = new TonWeb.utils.Address(useTonAddress());

export const deployNftCollection = async (address: string) => {
  const WalletAddress = new TonWeb.utils.Address(address);

  const nftCollection = new NftCollection(tonweb.provider, {
    ownerAddress: WalletAddress,
    royalty: 0 / 100,
    royaltyAddress: WalletAddress,
    collectionContentUri:
      'https://tonic-lounge-nft.s3.ap-northeast-2.amazonaws.com/collection/collection.json',
    nftItemContentBaseUri: 'https://tonic-lounge-nft.s3.ap-northeast-2.amazonaws.com/nft/',
    nftItemCodeHex: NftItem.codeHex,
  });

  const nftCollectionAddress = await nftCollection.getAddress();

  console.log('collection address=', nftCollectionAddress.toString(true, true, true));

  const stateInit = (await nftCollection.createStateInit()).stateInit;
  const stateInitBoc = await stateInit.toBoc(false);
  const stateInitBase64 = TonWeb.utils.bytesToBase64(stateInitBoc);
};

/*
export const DeployNftItem = async (address: string) => {
  const [tonConnectUI] = useTonConnectUI();

  // NFT Collection 주소
  const nftCollectionAddress = new TonWeb.utils.Address(
    'EQBm78tUJfFPYhAjPxHNvVXM0pxRWWeCWi7waUpiCZVB2DgW',
  );

  // NFT id 값
  const nftId = 1;

  // NFT index 값
  const currentNftIndex = 0;

  // collection admin wallet
  const collectionAdminWallet = new TonWeb.utils.Address(
    'EQCNW2PcpMqvmKF0jAKqbbuyMnFHTbolAznsbqmc9ssoxbYs',
  );

  // 현재 wallet 객체
  const currentWallet = new TonWeb.utils.Address(walletAddress);

  // Collection metadata 파일
  const url = 'https://tonic-lounge-nft.s3.ap-northeast-2.amazonaws.com/collection/collection.json';

  // nft item Base uri
  const nftItemsUrl = 'https://tonic-lounge-nft.s3.ap-northeast-2.amazonaws.com/nft/';

  // nft collection 정보
  const nftCollection = new NftCollection(tonweb.provider, {
    ownerAddress: collectionAdminWallet, // owner of the collection
    royalty: 0 / 100, // royalty in %
    royaltyAddress: collectionAdminWallet, // address to receive the royalties
    collectionContentUri: url, // url to the collection content
    nftItemContentBaseUri: nftItemsUrl, // url to the nft item content
    nftItemCodeHex: NftItem.codeHex, // format of the nft item
  });

  const history = await tonweb.getTransactions(nftCollectionAddress);

  const amount = TonWeb.utils.toNano((0.05).toString());
  const body = await nftCollection.createMintBody({
    amount,
    itemIndex: currentNftIndex,
    itemContentUri: `${nftItemsUrl}/${nftId}/${currentNftIndex}.json`,
    itemOwnerAddress: currentWallet,
  });

  const bodyBoc = await body.toBoc(false);
  const bodyBase64 = TonWeb.utils.bytesToBase64(bodyBoc);

  const myTransaction = {
    validUntil: Date.now() + 1000000,
    messages: [
      {
        address: nftCollectionAddress.toString(true, true, true),
        amount: amount.toString(),
        payload: bodyBase64,
      },
    ],
  };

  tonConnectUI.sendTransaction(myTransaction);
};
*/
