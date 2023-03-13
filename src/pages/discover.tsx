import styled from '@emotion/styled';
import CommonError from '@src/components/common/CommonError';
import ErrorBoundary from '@src/components/common/ErrorBoundary';
import Header from '@src/components/common/Header/Header';
import { EHeaderMenu } from '@src/components/common/Header/MenuButton/MenuButton';
import Badge, { IBadge } from '@src/components/Discover/Bagde/Bagde';
import DescriptionCard, {
  IDiscoverCardInfo,
} from '@src/components/Discover/DescriptionCard/DescriptionCard';
import Intro, { IIntro } from '@src/components/Home/Intro';
import { getBadges } from '@src/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useTonAddress } from '@tonconnect/ui-react';
import { NextPage } from 'next';
import { ClipLoader } from 'react-spinners';

import SSRSafeSuspense from '../components/common/SSRSafeSuspense';

const introDiscover: IIntro = {
  title: 'TONIC BADGE IS FOR IDENTITY!',
  description: `Tonic Badge allows you to mint your identity as digital mementos we call "BADGES."
                Give Tonic Badges to people for expressing who really they are.`,
};

const cardDescriptionList: IDiscoverCardInfo[] = [
  {
    number: 1,
    title: 'Issue',
    subtitle: 'Each Badge is created to make a story.',
    description:
      "Make proof of important achievement forever on the blockchain with words and pictures that bring back the moment for your community. it's as easy as filling out a form.",
  },
  {
    number: 2,
    title: 'Drop',
    subtitle: 'Connect collectors to shared history.',
    description:
      'When you drop a Badge, you give collectors a chance to own their identity. Use the Tonic Lounge platform to give collectibles directly to collectors.',
  },
  {
    number: 3,
    title: 'Connect',
    subtitle: 'Make your own curated community.',
    description:
      'After minting, Badges unlock a variety of experiences. From showing your unique identity to making great community with similar friends and more. Badges keep the great times spent together.',
  },
];

const Discover: NextPage = () => {
  return (
    <ErrorBoundary
      renderFallback={({ error, reset }) => <CommonError error={error} reset={reset} />}
    >
      <SSRSafeSuspense fallback={<ClipLoader size={50} color={'#ffffff'} />}>
        <Resolved />
      </SSRSafeSuspense>
    </ErrorBoundary>
  );
};

function Resolved() {
  const walletAddress = useTonAddress();

  const { data } = useQuery(['badges', walletAddress], () => getBadges(walletAddress));

  return (
    <StDiscoverMain>
      <Header menuName={EHeaderMenu.discover} />
      <Intro intro={introDiscover} />
      <StCardDescriptionTitle>
        HOW DOES <b>TONIC BADGE</b> WORK?
      </StCardDescriptionTitle>
      <StCardDescriptionMain>
        {cardDescriptionList.map((item: IDiscoverCardInfo, index: number) => (
          <DescriptionCard info={item} key={index} />
        ))}
      </StCardDescriptionMain>
      <StLine />
      <StBadgeMain>
        {data?.data.map((badgeItem: IBadge, index: number) => (
          <Badge badge={badgeItem} key={index} />
        ))}
      </StBadgeMain>
    </StDiscoverMain>
  );
}

export default Discover;

const StDiscoverMain = styled.main`
  background: url('/assets/background.png') no-repeat center center;
  background-size: cover;
  min-height: 100%;
  height: fit-content;
  width: 100%;
`;

const StCardDescriptionTitle = styled.p`
  margin-top: 60px;
  margin-bottom: 32px;
  font-family: 'Unbounded';
  font-weight: 300;
  font-size: 36px;
  line-height: 45px;
  text-align: center;
  color: #ffffff;

  b {
    font-weight: 500;
  }
`;

const StCardDescriptionMain = styled.main`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 20px;
  padding: 0 120px;
  font-family: 'Unbounded';
`;

const StLine = styled.div`
  margin: 60px 10px 80px;
  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.6) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  height: 1px;
`;

const StBadgeMain = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 120px;
  padding-bottom: 80px;
  gap: 12px;
`;
