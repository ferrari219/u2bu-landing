import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import useMobile from 'hook/useIsMobile';
import PropTypes from 'prop-types';

const Layout = ({ children, paddingOn = false }) => {
	const isMobile = useMobile();
	const markUp = (
		<section>
			<div>{children}</div>
		</section>
	);
	return (
		<>
			{isMobile ? (
				<div css={moStyle(paddingOn)}>{markUp}</div>
			) : (
				<div>{markUp}</div>
			)}
		</>
	);
};
Layout.propTypes = {
	children: PropTypes.node.isRequired,
	paddingOn: PropTypes.bool,
};
const moStyle = (paddingOn) => css`
	/* background-color: black; */
	padding: ${paddingOn ? '2rem' : '0'};
`;

export default Layout;
