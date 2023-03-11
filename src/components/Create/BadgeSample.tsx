import styled from '@emotion/styled';
import theme from '@src/styles/theme';
import React from 'react';

function BadgeSample() {
  const TITLE = 'Badge Sample';

  return (
    <>
      <StTitle>{TITLE}</StTitle>
      {/* @TODO Discovery Page merge 이후 Badge Component 가져와서 쓰기 */}
    </>
  );
}

export default BadgeSample;

const StTitle = styled.h2`
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;

  display: flex;
  align-items: center;
  text-align: center;

  margin-left: 108px;

  color: ${theme.colors.tonicWhite};
`;
