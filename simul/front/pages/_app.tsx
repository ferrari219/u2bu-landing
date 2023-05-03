import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/reset.css';
import Head from 'next/head';
import wrapper from 'store/configureStore';

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Simul:front</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Simul:front" />
        <meta name="keywords" content="Simul:front" />
        <meta property="og:title" content="Simul:front" />
        <meta property="og:description" content="Simul:front" />
      </Head>
      <Component />
    </>
  );
};
App.prototypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
