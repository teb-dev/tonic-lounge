import styled from '@emotion/styled';
import theme from '@src/styles/theme';
import LeftArr from 'public/assets/LeftArr.svg';
import RightArr from 'public/assets/RightArr.svg';
import { Dispatch, SetStateAction, useCallback } from 'react';
import shortid from 'shortid';

interface PaginationProps {
  pageLimit: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const PREV = 'PREV';
const NEXT = 'NEXT';

const SELECTABLE_NUM = 5;

function Pagination({ pageLimit, currentPage, setCurrentPage }: PaginationProps) {
  const getSelectablePages = useCallback(() => {
    const first = currentPage > 2 ? currentPage - 2 : 1;
    const last = first + SELECTABLE_NUM;

    const pages = [];

    for (let pageNum = first; pageNum < last; pageNum++) {
      if (pageNum > pageLimit) break;
      pages.push(pageNum);
    }

    return pages;
  }, [currentPage, pageLimit]);

  const showPages = () =>
    getSelectablePages().map((_) => {
      const isCurrent = _ === currentPage;

      return (
        <StPage key={shortid.generate()} isCurrent={isCurrent} onClick={() => setCurrentPage(_)}>
          {_}
        </StPage>
      );
    });

  const naviagtePage = (dir: typeof PREV | typeof NEXT) => {
    const value = dir === PREV ? -1 : 1;

    if (currentPage + value < 1 || currentPage + value > pageLimit) return;
    setCurrentPage((prevPage) => prevPage + value);
  };

  return (
    <StContainer>
      <StLeftBtn disabled={currentPage === 1} onClick={() => naviagtePage(PREV)}>
        <LeftArr />
      </StLeftBtn>
      <StPageList>{showPages()}</StPageList>
      <StRightBtn disabled={currentPage === pageLimit} onClick={() => naviagtePage(NEXT)}>
        <RightArr />
      </StRightBtn>
    </StContainer>
  );
}

export default Pagination;

const StContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 384px;
  height: 40px;
`;

const StPageList = styled.ol`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const StPage = styled.li<{ isCurrent: boolean }>`
  font-family: 'Unbounded';
  font-style: normal;
  width: 40px;
  height: 40px;
  padding-top: 9px;
  border-radius: 6px;
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  ${(props) =>
    props.isCurrent
      ? `

  background: rgba(255, 255, 255, 0.3);
  


  color: ${theme.colors.tonicWhite};
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  `
      : `
  color: ${theme.colors.tonicWhite};
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  `};
  &:hover {
    cursor: pointer;
  }
`;
const StButton = styled.button`
  all: unset;
  &:disabled {
    cursor: default;
    & > svg > path {
      stroke: lightgray;
    }
  }
`;
const StLeftBtn = styled(StButton)``;
const StRightBtn = styled(StButton)``;
