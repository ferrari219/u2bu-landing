import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const Heads = ({ title }) => {
  return (
    <Head>
      <title>{title && `${title}: `}유튜브 랜딩</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
      />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    </Head>
  );
};
Heads.proptypes = {
  title: PropTypes.string,
};

export default Heads;
