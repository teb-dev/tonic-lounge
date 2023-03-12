import styled from '@emotion/styled';
import theme from '@src/styles/theme';

export interface IBottom {
  title: string;
}

function LoungeBottom(props: { bottom: IBottom }) {
  return (
    <StLoungeAreaWrapper>
      <StSubtitle>{props.bottom.title}</StSubtitle>
      <StButton>
        <StButtonText href="https://forms.gle/vDLUfhQQ1Bcfh5pdA" target="_blank">
          Make My Telegram Community Space
        </StButtonText>
      </StButton>
    </StLoungeAreaWrapper>
  );
}

export default LoungeBottom;

const StLoungeAreaWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;
  flex-direction: column;
`;

const StSubtitle = styled.h2`
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 500;
  font-size: 34px;
  line-height: 42px;
  color: ${theme.colors.tonicWhite};
  margin-bottom: 8px;
  white-space: pre-line;
  text-align: center;
`;

const StButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 414px;
  height: 56px;
  background: ${theme.colors.tonicWhite};
  border-radius: 12px;
  border: 1px solid ${theme.colors.tonicWhite};
  margin-top: 32px;
`;

const StButtonText = styled.a`
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  color: ${theme.colors.tonicSecondary};
`;
