import styled from '@emotion/styled';
import theme from '@src/styles/theme';

export interface IDiscoverCardInfo {
  number: number;
  title: string;
  subtitle: string;
  description: string;
}

const DescriptionCard = (props: { info: IDiscoverCardInfo }) => {
  return (
    <StCardWrapper>
      <StCardTitleWrapper>
        <StCardTitleNumber>{props.info.number}</StCardTitleNumber>
        <StCardTitle>{props.info.title}</StCardTitle>
      </StCardTitleWrapper>
      <StCardSubtitle>{props.info.subtitle}</StCardSubtitle>
      <StCardDescription>{props.info.description}</StCardDescription>
    </StCardWrapper>
  );
};

export default DescriptionCard;

const StCardWrapper = styled.div`
  width: 30vw;
  padding: 40px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 40px;
`;

const StCardTitleWrapper = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

const StCardTitleNumber = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  width: 34px;
  margin-right: 12px;
  border-radius: 12px;
  background: ${theme.colors.tonicWhite};
  font-weight: 700;
  font-size: 20px;
  line-height: 140%;
  color: #2aabee;
`;

const StCardTitle = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 140%;
  color: ${theme.colors.tonicWhite};
`;

const StCardSubtitle = styled.p`
  margin-bottom: 6px;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: ${theme.colors.tonicWhite};
`;

const StCardDescription = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 140%;
  color: ${theme.colors.tonicWhite};
`;
