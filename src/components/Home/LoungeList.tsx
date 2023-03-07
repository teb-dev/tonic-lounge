import styled from '@emotion/styled';
import { useLocalStorage } from '@src/hooks/useLocalStorage';
import { getLounges } from '@src/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useTonAddress } from '@tonconnect/ui-react';
import { ClipLoader } from 'react-spinners';
import { TelegramUser } from 'telegram-login-button';

import SSRSafeSuspense from '../common/SSRSafeSuspense';
import LoungeCard from './LoungeCard';

interface LoungeListProps {
  page?: number;
}

const LoungeList = ({ page }: LoungeListProps) => {
  return (
    <SSRSafeSuspense fallback={<ClipLoader size={50} color={'#ffffff'} />}>
      <Resolved page={page} />
    </SSRSafeSuspense>
  );
};

function Resolved({ page = 1 }: LoungeListProps) {
  const userFriendlyAddress = useTonAddress();
  const initialUser: TelegramUser | null | undefined = null;
  const [user] = useLocalStorage<any>('telegramUser', initialUser);
  const { data } = useQuery(['lounges', page], () => getLounges(page));

  console.log('Address', userFriendlyAddress);

  return (
    <StList>
      {data?.data.map((lounge, idx) => (
        <LoungeCard
          key={idx}
          id={idx}
          name={lounge.name}
          redirectUrl={lounge.redirectUrl}
          requirement={lounge.requirement}
          image={lounge.image}
          user={user}
          userFriendlyAddress={userFriendlyAddress}
          check={lounge.check}
        />
      ))}
    </StList>
  );
}

export default LoungeList;

const StList = styled.ul``;
