import Head from 'next/head';
import React from 'react';

const Common = ({ Component }) => {
	return (
		<>
			<Head>
				<title>모바일 청첩장</title>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />

				<meta name="description" content="모바일 청첩장" />
				<meta name="keywords" content="모바일 청첩장" />
				<meta name="author" content="Graham" />
				<meta name="robots" content="index, follow" />
				<meta name="googlebot" content="index, follow" />
			</Head>
			<Component />
		</>
	);
};

export default Common;
