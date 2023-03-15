import styled from '@emotion/styled';
import Header from '@src/components/common/Header/Header';
import { EHeaderMenu } from '@src/components/common/Header/MenuButton/MenuButton';
import BadgeList from '@src/components/Discover/Bagde/BadgeList';
import DescriptionCard, {
  IDiscoverCardInfo,
} from '@src/components/Discover/DescriptionCard/DescriptionCard';
import Intro, { IIntro } from '@src/components/Home/Intro';
import theme from '@src/styles/theme';
const introDiscover: IIntro = {
  title: `Build Your Community 
          with Lounge Pass!`,
  description: `Tonic Lounge Pass allows you to mint NFTs and SBTs that gate your community
  Share the Lounge Pass to connect with people you identity yourself with to form a community`,
};

const cardDescriptionList: IDiscoverCardInfo[] = [
  {
    number: 1,
    title: 'Mint',
    subtitle: '',
    description:
      "Each Lounge Pass is a NFT or SBT, and it expresses who you are and what kind of people you are building a community with. You can submit a whitelist for wallet addresses that can mint your Pass. It's as easy as filling out a form.",
  },
  {
    number: 2,
    title: 'Claim',
    subtitle: '',
    description:
      "Once your Lounge Pass is ready to drop and claim, you will be notified of it via the email address you provided Whitelisted addresses can go to Tonic Lounge's Discover page and connect their wallet to claim the Pass",
  },
  {
    number: 3,
    title: 'Connect',
    subtitle: '',
    description:
      'After minting, you can directly connect and communicate with other Lounge Pass holders by requesting to have a Tonic Lounge set up. Here only verified Lounge Pass holders will be able to access the Telegram chat, creating an exclusive community',
  },
];

function Discover() {
  return (
    <StDiscoverMain>
      <Header menuName={EHeaderMenu.discover} />
      <Intro intro={introDiscover} />
      <StCardDescriptionTitle>
        How does <b>Lounge Pass</b> work?
      </StCardDescriptionTitle>
      <StCardDescriptionSection>
        {cardDescriptionList.map((item: IDiscoverCardInfo, index: number) => (
          <DescriptionCard info={item} key={index} />
        ))}
      </StCardDescriptionSection>
      <StLine />
      <StBadgeSection>
        {/* {data?.data.map((badgeItem: IBadge, index: number) => (
          <Badge badge={badgeItem} key={index} />
        ))} */}
        <BadgeList />
      </StBadgeSection>
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
  color: ${theme.colors.tonicWhite};

  b {
    font-weight: 500;
  }
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

const StBadgeSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 120px;
  padding-bottom: 80px;
  gap: 12px;
`;
const StCardDescriptionSection = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 20px;
  padding: 0 120px;
  font-family: 'Unbounded';
`;
