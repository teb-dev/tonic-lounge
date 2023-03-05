import styled from '@emotion/styled';
import theme from '@src/styles/theme';
import MainLogo from 'public/assets/mainLogo.svg';
import TelegramIcon from 'public/assets/TelegramIcon.svg';
import TonIcon from 'public/assets/TonIcon.svg';
function Header() {
  const CONNECT_WALLET = 'Connect Wallet';
  const LOG_IN_WITH_TELEGRAM = 'Log in with Telegram';

  return (
    <StHeader>
      <StLogo>
        <MainLogo />
      </StLogo>
      <StButtonGroup>
        <StButton>
          <TonIcon />
          <StButtonText>{CONNECT_WALLET}</StButtonText>
        </StButton>
        <StButton>
          <TelegramIcon />
          <StButtonText>{LOG_IN_WITH_TELEGRAM}</StButtonText>
        </StButton>
      </StButtonGroup>
    </StHeader>
  );
}

export default Header;

const StPureButton = styled.button`
  // remove default button styles
  border: none;
  outline: none;
  cursor: pointer;
`;

const StHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 44px 80px 0 80px;
`;

const StButtonGroup = styled.div`
  width: 426px;
  display: flex;
  justify-content: space-between;
`;
const StLogo = styled(StPureButton)`
  background: transparent;
`;

const StButton = styled(StPureButton)`
  padding: 17.5px 16px;
  display: flex;
  align-items: center;
  background: ${theme.colors.tonicWhite};
  border-radius: 12px;
`;

const StButtonText = styled.p`
  margin-left: 6px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: ${theme.colors.tonicSecondary};
`;
