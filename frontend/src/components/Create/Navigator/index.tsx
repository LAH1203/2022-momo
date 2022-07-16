import { Dispatch, SetStateAction } from 'react';

import { useTheme } from '@emotion/react';

import { ReactComponent as CompleteSVG } from 'assets/complete.svg';
import Dot from 'components/Dot';
import LeftArrow from 'components/svg/LeftArrow';
import RightArrow from 'components/svg/RightArrow';
import { PageType } from 'types/data';

import * as S from './index.styled';

interface NavigatorProps {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  totalPage: PageType[];
  changeScroll: (page: number) => void;
  gotoAdjacentPage: (direction: 'next' | 'prev') => void;
  createNewGroup: () => void;
}

function Navigator({
  page,
  setPage,
  totalPage,
  changeScroll,
  gotoAdjacentPage,
  createNewGroup,
}: NavigatorProps) {
  const {
    colors: { green001: activeColor, gray003: inactiveColor },
  } = useTheme();

  const goToNextPage = () => {
    gotoAdjacentPage('next');
  };

  const goToPrevPage = () => {
    gotoAdjacentPage('prev');
  };

  const changePage = (newPageNumber: number) => () => {
    setPage(newPageNumber);
    changeScroll(newPageNumber);
  };

  return (
    <S.Container>
      <button type="button" onClick={goToPrevPage}>
        <LeftArrow
          width={40}
          color={page === 1 ? inactiveColor : activeColor}
        />
      </button>
      {totalPage.map(({ number, content }) => (
        <button
          type="button"
          title={content}
          onClick={changePage(number)}
          key={number}
        >
          <Dot isFocused={number === page} />
        </button>
      ))}
      {page < totalPage.length ? (
        <button type="button" onClick={goToNextPage}>
          <RightArrow
            width={40}
            color={page === totalPage.length ? inactiveColor : activeColor}
          />
        </button>
      ) : (
        <button type="button" onClick={createNewGroup}>
          <CompleteSVG />
        </button>
      )}
    </S.Container>
  );
}

export default Navigator;
