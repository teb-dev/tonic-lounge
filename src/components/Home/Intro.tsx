import styled from '@emotion/styled';
import theme from '@src/styles/theme';

export interface IIntro {
  title: string;
  subtitle?: string;
  description: string;
  learnMore?: string;
}

const Intro = (props: { intro: IIntro }) => {
  return (
    <StIntro>
      <StTitle>{props.intro.title}</StTitle>
      {props.intro.description !== undefined && <StSubtitle>{props.intro.subtitle}</StSubtitle>}
      <StDescription>{props.intro.description}</StDescription>
      {props.intro.learnMore !== undefined && (
        <StButton href="https://dorahacks.io/buidl/4521" target="_blank">
          {props.intro.learnMore}
        </StButton>
      )}
    </StIntro>
  );
};

export default Intro;

const StIntro = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  text-align: center;
`;

const StTitle = styled.h1`
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 300;
  font-size: 60px;
  line-height: 74px;
  color: ${theme.colors.tonicWhite};
  margin-bottom: 8px;
`;
const StSubtitle = styled.h2`
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 35px;
  color: ${theme.colors.tonicWhite};
  margin-bottom: 8px;
`;
const StDescription = styled.p`
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 140%;
  color: ${theme.colors.tonicWhite};
  white-space: pre-line;
  text-align: center;
  margin-bottom: 24px;
`;

const StButton = styled.a`
  padding: 10px 20px;

  height: 48px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 12px;
  cursor: pointer;

  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  cursor: pointer;
  color: ${theme.colors.tonicWhite};
`;
