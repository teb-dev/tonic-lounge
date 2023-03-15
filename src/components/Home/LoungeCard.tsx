import styled from '@emotion/styled';
import { getJettons, getNFTs, getTon } from '@src/lib/tonapi';
import theme from '@src/styles/theme';
import { LoungeData, requirement } from '@src/types';
import { useTonAddress } from '@tonconnect/ui-react';
import Image from 'next/image';
import WhiteTelegramIcon from 'public/assets/WhiteTelegramIcon.svg';
import { useEffect, useState } from 'react';

function LoungeCard({
  title,
  description,
  redirectUrl,
  requirements,
  imageUrl,
  user,
  enterLounge,
}: LoungeData) {
  // requirements, redirectUrl 추가해야함.
  const walletAddress: string = useTonAddress();
  const [NFTList, setNFTList] = useState([]);
  const [jettons, setJettons] = useState([]);
  const [ton, setTon] = useState(0);
  const [check, setCheck] = useState(false);

  const getNFTList = async () => {
    if (walletAddress) {
      const nfts = await getNFTs(walletAddress);

      setNFTList(nfts);
    }
  };
  const getJettonsList = async () => {
    if (walletAddress) {
      const jetton = await getJettons(walletAddress);

      setJettons(jetton);
    }
  };

  const getTonBalance = async () => {
    if (walletAddress) {
      const tonBalance: number = await getTon(walletAddress);

      setTon(tonBalance / Math.pow(10, 9));
    }
  };

  const checkRequirement = (requirements: requirement[]) => {
    // requirements에 따라서 버튼이 바뀌어야함.
    requirements.map((requirement: requirement) => {
      if (requirement.type === 'ton') {
        if (ton >= requirement.amount) {
          setCheck(true);
        }
      } else if (requirement.type === 'nft') {
        // human readable address로 바꿔야함.
        NFTList.forEach((nft: any) => {
          if (nft.collection.address == requirement.address) {
            setCheck(true);
          }
        });
      } else if (requirement.type === 'jetton') {
        // human readable address로 바꿔야함.
        jettons.forEach((jetton: any) => {
          if (jetton.jetton_address == requirement.address) {
            if (jetton.balance / Math.pow(10, jetton.metadata.decimals) >= requirement.amount) {
              setCheck(true);
            }
          }
        });
      }
    });
  };

  useEffect(() => {
    getNFTList();
    getJettonsList();
    getTonBalance();
    checkRequirement(requirements);
  }, [walletAddress, ton, NFTList, jettons]);

  return (
    <StCard>
      <StContentWrapper>
        <Image
          src={imageUrl}
          width={56}
          height={56}
          alt="lounge"
          style={{ borderRadius: '12px' }}
          blurDataURL={imageUrl}
          placeholder="blur"
          unoptimized={true}
        />
        <StContents>
          <StName>{title}</StName>
          <StDescription>
            <StBadge>Requirement</StBadge>
            <StRequirement>{description}</StRequirement>
          </StDescription>
        </StContents>
      </StContentWrapper>
      {/* @TODO case별로 버튼 종류 바뀌어야 할듯 -> 디자인 확실히 나오면 컴포넌트 분리해 조건부렌더링*/}
      {walletAddress && user ? (
        check ? (
          <StLoungeJoinButton
            onClick={() => {
              enterLounge(user.id, redirectUrl, title);
            }}
          >
            Join
          </StLoungeJoinButton>
        ) : (
          <StLoungeRejectButton>Rejected</StLoungeRejectButton>
        )
      ) : (
        <StButton>
          <WhiteTelegramIcon />
          Connect Telegram & Wallet
        </StButton>
      )}
    </StCard>
  );
}

export default LoungeCard;
const StCard = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 32px;

  width: 920px;
  height: 112px;

  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  margin-bottom: 12px;
`;

const StContentWrapper = styled.div`
  display: flex;
`;

const StContents = styled.div`
  margin-left: 12px;
  width: 506px;
`;
const StName = styled.h1`
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;
  color: ${theme.colors.tonicBlack};
  margin-bottom: 8px;
`;
const StDescription = styled.div`
  display: flex;
  align-items: center;
`;
const StBadge = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;

  width: 98px;
  height: 28px;

  background: rgba(42, 171, 238, 0.2);
  border-radius: 100px;

  // font
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  color: ${theme.colors.tonicSecondary};
  margin-right: 8px;
`;
const StRequirement = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: ${theme.colors.tonicBlack};
`;
const StPureButton = styled.button`
  // remove default button styles
  border: none;
  outline: none;
  cursor: pointer;
`;
const StButton = styled(StPureButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  gap: 6px;

  /* width: 266px; */
  height: 48px;

  background: ${theme.colors.tonicPoint};
  opacity: 0.3;
  border-radius: 12px;
  color: ${theme.colors.tonicWhite};
`;

const StLoungeButton = styled(StPureButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 108px;
  height: 48px;
`;

const StLoungeJoinButton = styled(StLoungeButton)`
  background: ${theme.colors.tonicSecondary};
  border-radius: 12px;
  color: ${theme.colors.tonicWhite};

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
`;

const StLoungeRejectButton = styled(StLoungeButton)`
  background: ${theme.colors.tonicGray};
  border-radius: 12px;
  color: ${theme.colors.tonicDarkGray};

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  cursor: default;
`;
