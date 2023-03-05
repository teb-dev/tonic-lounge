import styled from '@emotion/styled';
import theme from '@src/styles/theme';
import React from 'react';

function LoungesArea() {
  const TITLE = 'Lounges';
  const DESCRIPTION = (
    <StDescriptionGroup>
      You have to connect <b>TON & Telegram</b> to join eligible lounges.
    </StDescriptionGroup>
  );

  return (
    <StLoungeAreaWrapper>
      <StLoungeArea>
        <StTitle>{TITLE}</StTitle>
        <StDescriptionGroup>
          <StDescription>You have to connect</StDescription>
          <StDescriptionBold>TON & Telegram</StDescriptionBold>
          <StDescription>to join eligible lounges.</StDescription>
        </StDescriptionGroup>
      </StLoungeArea>
    </StLoungeAreaWrapper>
  );
}

export default LoungesArea;

const StLoungeAreaWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  margin-top: 66px;
  padding-bottom: 80px;
`;

const StLoungeArea = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  gap: 40px;

  width: 1000px;
  height: 893px;

  /* tonic wallet/white-30 */

  background: rgba(255, 255, 255, 0.3);
  border-radius: 40px;
`;

const StTitle = styled.h1`
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 500;
  font-size: 34px;
  line-height: 42px;
  display: flex;
  align-items: center;
  color: ${theme.colors.tonicWhite};
`;

const StDescriptionGroup = styled.span`
  display: flex;
  width: 790px;
  justify-content: space-between;
`;
const StDescription = styled.p`
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  line-height: 140%;
  color: ${theme.colors.tonicWhite};
`;
const StDescriptionBold = styled(StDescription)`
  font-weight: 600;
`;
