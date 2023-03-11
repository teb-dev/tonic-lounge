import styled from '@emotion/styled';
import Header from '@src/components/common/Header';
import Intro from '@src/components/Home/Intro';
import LoungesArea from '@src/components/Home/LoungesArea';
import type { NextPage } from 'next';
import Head from 'next/head';
const Home: NextPage = () => {
  return (
    <StWrapper>
      <Head>
        <title>Tonic Lounge</title>
        <meta name="description" content="Tonic Lounge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <StMain>
        <Intro />
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
