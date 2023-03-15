import styled from '@emotion/styled';
import { useLocalStorage } from '@src/hooks/useLocalStorage';
import { enterLounge, getLounges } from '@src/lib/api';
import { useQuery } from '@tanstack/react-query';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import { TelegramUser } from 'telegram-login-button';

import CommonError from '../common/CommonError';
import ErrorBoundary from '../common/ErrorBoundary';
import SSRSafeSuspense from '../common/SSRSafeSuspense';
import LoungeCard from './LoungeCard';

interface LoungeListProps {
  currentPage: number;
  setPageLimit: Dispatch<SetStateAction<number>>;
}
const LoungeList = ({ currentPage, setPageLimit }: LoungeListProps) => {
  return (
    <ErrorBoundary
      renderFallback={({ error, reset }) => <CommonError error={error} reset={reset} />}
    >
      <SSRSafeSuspense fallback={<ClipLoader size={50} color={'#ffffff'} />}>
        <Resolved currentPage={currentPage} setPageLimit={setPageLimit} />
      </SSRSafeSuspense>
    </ErrorBoundary>
  );
};

function Resolved({ currentPage = 1, setPageLimit }: LoungeListProps) {
  const MAX_DATA_PER_PAGE = 5;
  const initialUser: TelegramUser | null | undefined = null;
  const { data } = useQuery(['lounges', currentPage], () => getLounges(currentPage));
  const [user] = useLocalStorage<any>('telegramUser', initialUser);

  useEffect(() => {
    data?.total && setPageLimit(data.total / MAX_DATA_PER_PAGE);
  }, [data, setPageLimit]);

  return (
    <StList>
      {data?.data.map((lounge, idx) => (
        <LoungeCard
          key={idx}
          title={lounge.title}
          description={lounge.description}
          redirectUrl={lounge.redirectUrl}
          requirements={lounge.requirements}
          imageUrl={lounge.imageUrl}
          user={user}
          enterLounge={enterLounge}
        />
      ))}
    </StList>
  );
}

export default LoungeList;

const StList = styled.ul``;
