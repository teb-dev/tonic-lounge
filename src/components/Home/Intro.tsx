import styled from '@emotion/styled';
import theme from '@src/styles/theme';
import React from 'react';

function Intro() {
  const TITLE = 'Welcome to Tonic Lounge';
  const SUBTITLE = 'Your Community Space for Telegram';
  const DESCRIPTION = `Explore exclusive, gated Telegram chat rooms that you have access to
  based on your tokens, NFTs, and transaction history on the TON blockchain.`;
  const LEARN_MORE = 'Learn More';

  return (
    <StIntron>
      <StTitle>{TITLE}</StTitle>
      <StSubtitle>{SUBTITLE}</StSubtitle>
      <StDescription>{DESCRIPTION}</StDescription>
      <StButton>{LEARN_MORE}</StButton>
    </StIntron>
  );
}

export default Intro;

const StIntron = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
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

const StButton = styled.button`
  padding: 10px 20px;
  width: 150px;
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

  color: ${theme.colors.tonicWhite};
`;
