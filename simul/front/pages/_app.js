import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/reset.css';
import wrapper from 'store/configureStore';

const common = ({ Component }) => {
  return (
    <>
      <Head>
        <title>U2buLanding</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="U2buLanding" />
      </Head>
      <Component />
    </>
  );
};
common.proptypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(common);
