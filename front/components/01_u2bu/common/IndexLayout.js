import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import useMobile from 'hook/useIsMobile';

const IndexLayout = ({ children, paddingOn = false }) => {
  const isMobile = useMobile();
  const markUp = (
    <section>
      <div>{children}</div>
    </section>
  );
  return (
    <>{isMobile ? <div css={moStyle}>{markUp}</div> : <div>{markUp}</div>}</>
  );
};
const moStyle = css`
  .paddingOn {
    padding: 0 2rem;
  }
  & > section {
    background-color: black;
    padding: 0;
  }
`;

export default IndexLayout;
