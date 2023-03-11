import styled from '@emotion/styled';
import theme from '@src/styles/theme';
import FirstIcon from 'public/assets/First.svg';
import SecondIcon from 'public/assets/Second.svg';
import ThirdIcon from 'public/assets/Third.svg';
function Guide() {
  const TITLE = '📚 Badge Making Guide';
  const SUB_TITLE = 'Tonic Badge is SBT(Soul Bound Token) which is non-transferable NFT.';
  const DESCRIPTIONS = [
    { icon: <FirstIcon />, text: 'Create Tonic Badge' },
    { icon: <SecondIcon />, text: 'Admin will allow your Badge to be posted in Discover page.' },
    {
      icon: <ThirdIcon />,
      text: 'People who are allowed can claim your Tonic Badge by minting with 0.05 TON ',
    },
  ];

  return (
    <StWrapper>
      <StTitle>{TITLE}</StTitle>
      <StSubTitle>{SUB_TITLE}</StSubTitle>
      <StDescription>
        {DESCRIPTIONS.map((description, index) => (
          <StLi key={index}>
            {description.icon}
            {description.text}
          </StLi>
        ))}
      </StDescription>
    </StWrapper>
  );
}

export default Guide;

const StWrapper = styled.div`
  width: 1200px;
  height: 262px;

  background: rgba(255, 255, 255, 0.2);
  /* tonic wallet/white-40 */

  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  padding: 40px;
`;

const StTitle = styled.h1`
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;

  color: ${theme.colors.tonicWhite};
  margin-bottom: 20px;
`;

const StSubTitle = styled.h2`
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: ${theme.colors.tonicWhite};
  margin-bottom: 16px;
`;

const StDescription = styled.ul`
  margin-bottom: 28px;
`;

const StLi = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;

  /* width: 748px; */
  height: 24px;

  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 140%;

  color: ${theme.colors.tonicWhite};
  margin-bottom: 12px;
`;
