import styled from '@emotion/styled';
import Header from '@src/components/common/Header/Header';
import { EHeaderMenu } from '@src/components/common/Header/MenuButton/MenuButton';
import BadgeSample from '@src/components/Create/BadgeSample';
import CreateBadge from '@src/components/Create/CreateBadge';
import Guide from '@src/components/Create/Guide';
import Head from 'next/head';
import React from 'react';

function Create() {
  return (
    <StWrapper>
      <Head>
        <title>Tonic Lounge</title>
        <meta name="description" content="Tonic Lounge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header menuName={EHeaderMenu.create} />
      <StContentsArea>
        <StGuideSection>
          <Guide />
        </StGuideSection>
        <StMain>
          <CreateBadge />
          <BadgeSample />
        </StMain>
      </StContentsArea>
    </StWrapper>
  );
}

export default Create;

const StWrapper = styled.div`
  background: url('/assets/background.png') no-repeat center center;
  background-size: cover;
  min-height: 100%;
  height: fit-content;
  width: 100%;
`;

const StContentsArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 28px;
`;

const StGuideSection = styled.section`
  width: 285px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StMain = styled.main`
  display: flex;
  width: 1200px;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 40px;
`;
