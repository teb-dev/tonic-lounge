import styled from '@emotion/styled';
import { deployNftItem } from '@src/lib/nft';
import theme from '@src/styles/theme';
import { useTonAddress, useTonConnectUI } from '@tonconnect/ui-react';

export interface IBadge {
  imageUrl: string;
  title: string;
  description: string;
  nftItemContentBaseUri: string;
  isWhiteListed: number;
  mintAmount: number;
  id: number;
}

const Badge = (props: { badge: IBadge }) => {
  const userFriendlyAddress = useTonAddress();
  const [tonConnectUI, setOptions] = useTonConnectUI();

  return (
    <StBadge>
      <StBadgeThumbnailWrapper>
        <img src={props.badge.imageUrl} alt="" />
      </StBadgeThumbnailWrapper>
      <StBadgeTitle>{props.badge.title}</StBadgeTitle>
      <StBadgeDescriptionWrapper>
        <StBadgeDescription>{props.badge.description}</StBadgeDescription>
      </StBadgeDescriptionWrapper>
      {props.badge.isWhiteListed == 1 ? (
        <StBadgeButton
          isWhiteListed={props.badge.isWhiteListed == 1}
          onClick={() =>
            deployNftItem(
              userFriendlyAddress,
              tonConnectUI,
              props.badge.nftItemContentBaseUri,
              props.badge.mintAmount,
              props.badge.id,
            )
          }
        >
          Claim Your Pass
        </StBadgeButton>
      ) : (
        <StBadgeButton isWhiteListed={props.badge.isWhiteListed == 1}> Not Allowed</StBadgeButton>
      )}
    </StBadge>
  );
};

export default Badge;

const StBadge = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 386px;
  width: 285px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  font-family: 'Unbounded';
  padding: 24px 20px;
`;
const StBadgeThumbnailWrapper = styled.div`
  height: 88px;
  width: 88px;
  margin-bottom: 12px;

  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: contain;
    object-position: center;
  }
`;
const StBadgeTitle = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 50px;
  width: 100%;
  margin-bottom: 12px;
  font-weight: 500;
  font-size: 18px;
  line-height: 140%;
  text-align: center;
  color: ${theme.colors.tonicWhite};
`;
const StBadgeDescriptionWrapper = styled.div`
  height: 120px;
  overflow-y: scroll;
  margin-bottom: 12px;
  padding: 16px;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 16px;
`;
const StBadgeDescription = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 140%;
  color: ${(props) => props.theme.colors.tonicWhite};
`;
const StBadgeButton = styled.button<{ isWhiteListed: boolean }>`
  width: 100%;
  padding: 12px;
  border-radius: 12px;
  text-align: center;
  font-family: 'Unbounded';
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;

  ${(props) =>
    props.isWhiteListed
      ? `
          background: #FFFFFF;
          color: ${props.theme.colors.tonicSecondary};
          border: 1px solid rgba(255, 255, 255, 1);
        `
      : `
          background: rgba(255, 255, 255, 0.2);
          opacity: 0.5;      
          border: 1px solid rgba(255, 255, 255, 0.4);
          color: ${props.theme.colors.tonicWhite};
        `}
`;
