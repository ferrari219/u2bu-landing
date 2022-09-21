import React from 'react';
import PropTypes from 'prop-types';
import wrapper from 'store/configureStore';
import Head from 'next/head';

const app = ({ Component }) => {
  return (
    <>
      <Head>
        <title>랜딩</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <Component />
    </>
  );
};
app.proptypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(app);
