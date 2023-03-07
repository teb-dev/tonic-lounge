import styled from '@emotion/styled';
import { getLounges } from '@src/lib/api';
import { useQuery } from '@tanstack/react-query';
import { ClipLoader } from 'react-spinners';

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
  const { data } = useQuery(['lounges', page], () => getLounges(page));

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
