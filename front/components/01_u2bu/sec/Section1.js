import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import useIsMobile from 'hook/useIsMobile';

const Section1 = () => {
  const isMobile = useIsMobile();
  const markUp = (
    <div>
      <h2>이런 분들이라면 꼭 신청하세요!</h2>
    </div>
  );
  return (
    <>{isMobile ? <section>{markUp}</section> : <section>{markUp}</section>}</>
  );
};

export default Section1;
