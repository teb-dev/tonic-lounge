import styled from '@emotion/styled';
import theme from '@src/styles/theme';
import Image from 'next/image';
import React from 'react';

function BadgeSample() {
  const TITLE = 'Lounge Pass Sample';

  return (
    <StWrapper>
      <StTitle>{TITLE}</StTitle>
      {/* @TODO Discovery Page merge 이후 Badge Component 가져와서 쓰기 */}
      <Image src="assets/BadgeSample.png" height={386} width={447} alt="badge sample"></Image>
    </StWrapper>
  );
}

export default BadgeSample;

const StWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 108px;
`;

const StTitle = styled.h2`
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;

  display: flex;
  align-items: center;
  text-align: center;

  color: ${theme.colors.tonicWhite};
  margin-bottom: 20px;
  padding-left: 33.5px;
`;
