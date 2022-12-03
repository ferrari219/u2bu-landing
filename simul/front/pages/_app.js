import Head from 'next/head';
import React from 'react';
import PropTypes from 'prop-types';
import wrapper from 'store/configureStore';

const App = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<title>App</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
};
App.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.any,
};

export default wrapper.withRedux(App);
