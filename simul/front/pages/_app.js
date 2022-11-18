import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/reset.css';
import Head from 'next/head';
import wrapper from 'store/configureStore';

const common = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Event Propmotion</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>
      <Component />
    </>
  );
};
//proptypes
common.proptype = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(common);
