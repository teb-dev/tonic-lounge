import styled from '@emotion/styled';
import CommonError from '@src/components/common/CommonError';
import ErrorBoundary from '@src/components/common/ErrorBoundary';
import SSRSafeSuspense from '@src/components/common/SSRSafeSuspense';
import { getBadges } from '@src/lib/api';
import theme from '@src/styles/theme';
import { useQuery } from '@tanstack/react-query';
import { useTonAddress } from '@tonconnect/ui-react';
import { ClipLoader } from 'react-spinners';

import Badge, { IBadge } from './Bagde';

function BadgeList() {
  return (
    <ErrorBoundary
      renderFallback={({ error, reset }) => <CommonError error={error} reset={reset} />}
    >
      <SSRSafeSuspense fallback={<ClipLoader size={50} color={'#ffffff'} />}>
        <Resolved />
      </SSRSafeSuspense>
    </ErrorBoundary>
  );
}

function Resolved() {
  const walletAddress = useTonAddress();

  const { data } = useQuery(['badges', walletAddress], () => getBadges(walletAddress));

  console.log('data', data);

  if (data && data?.data?.length > 0) {
    return (
      <>
        {data?.data?.map((badgeItem: IBadge, index: number) => (
          <Badge badge={badgeItem} key={index} />
        ))}
      </>
    );
  } else {
    return <StDescription>No badge registered yet</StDescription>;
  }
}

export default BadgeList;

const StDescription = styled.p`
  font-family: 'Unbounded';
  font-weight: 300;
  font-size: 16px;
  line-height: 45px;
  text-align: center;
  color: ${theme.colors.tonicWhite};
`;
