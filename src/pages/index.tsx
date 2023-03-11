import styled from '@emotion/styled';
import Header from '@src/components/common/Header/Header';
import { EHeaderMenu } from '@src/components/common/Header/MenuButton/MenuButton';
import Intro, { IIntro } from '@src/components/Home/Intro';
import LoungesArea from '@src/components/Home/LoungesArea';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  const introHome: IIntro = {
    title: 'Welcome to Tonic Lounge',
    subtitle: 'Your Community Space for Telegram',
    description: `Explore exclusive, gated Telegram chat rooms that you have access to
  based on your tokens, NFTs, and transaction history on the TON blockchain.`,
    learnMore: 'Learn More',
  };

  return (
    <StWrapper>
      <Head>
        <title>Tonic Lounge</title>
        <meta name="description" content="Tonic Lounge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header menuName={EHeaderMenu.home} />
      <StMain>
        <Intro intro={introHome} />
        <LoungesArea />
      </StMain>
    </StWrapper>
  );
};

export default Home;
const StWrapper = styled.div`
  background: url('/assets/background.png') no-repeat center center;
  background-size: cover;
  min-height: 100%;
  height: fit-content;
  width: 100%;
`;

const StMain = styled.main``;
