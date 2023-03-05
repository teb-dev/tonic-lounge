import styled from '@emotion/styled';
import Header from '@src/components/common/Header';
import Intro from '@src/components/Home/Intro';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <StMain>
      <Head>
        <title>Tonic Lounge</title>
        <meta name="description" content="Tonic Lounge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* <Intro /> */}
    </StMain>
  );
};

export default Home;
const StMain = styled.main`
  background: url('/assets/background.png') no-repeat center center;
  height: 100%;
  width: 100%;
`;
