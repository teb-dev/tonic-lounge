import styled from '@emotion/styled';
import theme from '@src/styles/theme';
import { TonConnectButton } from '@tonconnect/ui-react';
import MainLogo from 'public/assets/mainLogo.svg';
import TrayIcon from 'public/assets/TrayIcon.svg';
import { useState } from 'react';
import TelegramLoginButton, { TelegramUser } from 'telegram-login-button';

import MenuButton, { EHeaderMenu } from './MenuButton/MenuButton';

const Header = (props: { menuName: EHeaderMenu }) => {
  const [user, setUser] = useState<TelegramUser | null>(null);
  const [isMenuOn, setIsMenuOn] = useState<boolean>(false);

  return (
    <StHeader>
      <StLogo>
        <MainLogo />
      </StLogo>
      <StButtonGroup>
        <StMenuButtonWrapper>
          <MenuButton menuName={props.menuName} isMenuOn={isMenuOn} setIsMenuOn={setIsMenuOn} />
        </StMenuButtonWrapper>
        {user ? (
          <StTelegramButton>
            <StTelegramImg src={user.photo_url} />
            <StTelegramButtonText>{user.first_name}</StTelegramButtonText>
            <TrayIcon />
          </StTelegramButton>
        ) : (
          <StTelegramLoginButton
            botName="TonicLoungeBot"
            usePic={true}
            dataOnauth={(user: TelegramUser) => {
              setUser(user);
              console.log(user);
            }}
          />
        )}
        <TonConnectButton />
      </StButtonGroup>
    </StHeader>
  );
};

export default Header;

const StTelegramLoginButton = styled(TelegramLoginButton)`
  display: flex;
  align-items: center;
  margin-right: 12px;
`;

const StPureButton = styled.button`
  // remove default button styles
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0px 6px;
`;

const StHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 44px 80px 0 80px;
`;

const StButtonGroup = styled.div`
  display: flex;
`;
const StLogo = styled(StPureButton)`
  background: transparent;
`;

const StMenuButtonWrapper = styled.div`
  margin-right: 12px;
`;

const StTelegramButton = styled(StPureButton)`
  padding: 9px 12px;
  display: flex;
  align-items: center;
  background: ${theme.colors.tonicLogin};
  border-radius: 16px;
  border: 1px solid ${theme.colors.tonicLoginBorder};
`;

const StTelegramImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 12px;
`;

const StTelegramButtonText = styled.p`
  margin-left: 6px;
  margin-right: 19px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: ${theme.colors.tonicWhite};
`;
