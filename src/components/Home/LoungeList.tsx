import styled from '@emotion/styled';
import { getLounges } from '@src/lib/api';
import { useQuery } from '@tanstack/react-query';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { ClipLoader } from 'react-spinners';

import SSRSafeSuspense from '../common/SSRSafeSuspense';
import LoungeCard from './LoungeCard';

interface LoungeListProps {
  currentPage: number;
  setPageLimit: Dispatch<SetStateAction<number>>;
}
const LoungeList = ({ currentPage, setPageLimit }: LoungeListProps) => {
  return (
    <SSRSafeSuspense fallback={<ClipLoader size={50} color={'#ffffff'} />}>
      <Resolved currentPage={currentPage} setPageLimit={setPageLimit} />
    </SSRSafeSuspense>
  );
};

function Resolved({ currentPage = 1, setPageLimit }: LoungeListProps) {
  const MAX_DATA_PER_PAGE = 5;
  const { data } = useQuery(['lounges', currentPage], () => getLounges(currentPage));

  useEffect(() => {
    data?.total && setPageLimit(data.total / MAX_DATA_PER_PAGE);
  }, [data, setPageLimit]);

  return (
    <StList>
      {data?.data.map((lounge, idx) => (
        <LoungeCard
          key={idx}
          name={lounge.name}
          redirectUrl={lounge.redirectUrl}
          requirement={lounge.requirement}
          image={lounge.image}
        />
      ))}
    </StList>
  );
}

export default LoungeList;

const StList = styled.ul``;
