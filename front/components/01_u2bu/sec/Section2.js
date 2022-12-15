import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import useIsMobile from 'hook/useIsMobile';

const Section2 = () => {
  const isMobile = useIsMobile();
  const markUp = (
    <div>
      <h2>강의도 무료인데 혜택도 있다고?</h2>
    </div>
  );
  return (
    <>{isMobile ? <section>{markUp}</section> : <section>{markUp}</section>}</>
  );
};

export default Section2;
