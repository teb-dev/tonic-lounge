import styled from '@emotion/styled';
import { EPageURL } from '@src/constants/page/url';
import { useRouter } from 'next/router';
import IconArrowDown from 'public/assets/iconArrowDown.svg';

export enum EHeaderMenu {
  home = 'Tonic Badge',
  discover = 'Discover',
  create = 'Create',
}

export interface IHeaderMenu {
  title: EHeaderMenu;
  selected: boolean;
  url: EPageURL;
}

const MenuButton = (props: {
  menuName: EHeaderMenu;
  isMenuOn: boolean;
  setIsMenuOn: (menuOn: boolean) => void;
}) => {
  const router = useRouter();
  const HeaderMenuList: IHeaderMenu[] = [
    {
      title: EHeaderMenu.home,
      selected: props.menuName === EHeaderMenu.home,
      url: EPageURL.home,
    },
    {
      title: EHeaderMenu.discover,
      selected: props.menuName === EHeaderMenu.discover,
      url: EPageURL.discover,
    },
    {
      title: EHeaderMenu.create,
      selected: props.menuName === EHeaderMenu.create,
      url: EPageURL.create,
    },
  ];

  const routing = (link: EPageURL) => {
    if (router.pathname === link) {
      props.setIsMenuOn(false);
    } else {
      router.push(link);
    }
  };

  return (
    <>
      {props.isMenuOn && <StMenuCloseBackground onClick={() => props.setIsMenuOn(false)} />}
      <StMenuButtonWrapper>
        <StMenuButton onClick={() => props.setIsMenuOn(!props.isMenuOn)}>
          <p>{props.menuName}</p>
          <IconArrowDown />
        </StMenuButton>
        {props.isMenuOn && (
          <StMenuDropdown>
            {HeaderMenuList.map((menu: IHeaderMenu, index: number) => (
              <StMenuDropdownItem
                selected={menu.selected}
                key={index}
                onClick={() => routing(menu.url)}
              >
                {menu.title}
                {index === 0 && <IconArrowDown />}
              </StMenuDropdownItem>
            ))}
          </StMenuDropdown>
        )}
      </StMenuButtonWrapper>
    </>
  );
};

export default MenuButton;

const StMenuCloseBackground = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background: transparent;
  z-index: 99;
`;
const StMenuButtonWrapper = styled.div`
  position: relative;
  font-family: 'Pretendard';
  z-index: 100;
`;
const StMenuButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  height: 56px;
  padding: 16px;
  gap: 8px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 16px;

  p {
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: ${(props) => props.theme.colors.tonicWhite};
  }
  svg {
    height: 16px;
    width: 16px;
    color: ;
  }
`;
const StMenuDropdown = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: ${(props) => props.theme.colors.tonicSecondary};

  a {
  }
`;
const StMenuDropdownItem = styled.p<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 17.5px 16px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.tonicWhite};

  :first-of-type {
    border-radius: 16px 16px 0 0;
  }

  :last-of-type {
    border-radius: 0 0 16px 16px;
  }
  ${(props) =>
    props.selected &&
    `
      background: #C8ECFF;
    `}

  svg {
    transform: rotate(180deg);

    path {
      stroke: ${(props) => props.theme.colors.tonicSecondary};
    }
  }
`;
