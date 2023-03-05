import styled from '@emotion/styled';
import theme from '@src/styles/theme';
import { LoungeData } from '@src/types';
import Image from 'next/image';
import WhiteTelegramIcon from 'public/assets/WhiteTelegramIcon.svg';
function LoungeCard({ name, requirement, image, redirectUrl }: LoungeData) {
  const handleClick = () => {
    window.open(redirectUrl);
  };

  return (
    <StCard>
      <Image
        src={image}
        width={56}
        height={56}
        alt="lounge"
        style={{ borderRadius: '12px' }}
        blurDataURL={image}
        placeholder="blur"
        unoptimized={true}
      />
      <StContents>
        <StName>{name}</StName>
        <StDescription>
          <StBadge>Requirement</StBadge>
          <StRequirement>{requirement}</StRequirement>
        </StDescription>
      </StContents>
      {/* @TODO case별로 버튼 종류 바뀌어야 할듯 -> 디자인 확실히 나오면 컴포넌트 분리해 조건부렌더링*/}
      <StButton onClick={handleClick}>
        <WhiteTelegramIcon />
        Connect Telegram & Wallet
      </StButton>
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

const StContents = styled.div`
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
