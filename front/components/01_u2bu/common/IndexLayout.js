import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

import useMobile from 'hook/useIsMobile';

const IndexLayout = ({ children, paddingOn = false, bgColor = '' }) => {
  const isMobile = useMobile();
  const markUp = (
    <section>
      <div>{children}</div>
    </section>
  );
  return (
    <>
      {isMobile ? (
        <div css={moStyle(paddingOn, bgColor)}>{markUp}</div>
      ) : (
        <div>{markUp}</div>
      )}
    </>
  );
};
IndexLayout.propTypes = {
  children: PropTypes.node.isRequired,
  paddingOn: PropTypes.bool,
  bgColor: PropTypes.string,
};
const moStyle = (paddingOn, bgColor) => css`
  & > section {
    background-color: ${bgColor ? bgColor : 'white'};
    padding: ${paddingOn ? '0 2rem' : '0'};
  }
`;

export default IndexLayout;
