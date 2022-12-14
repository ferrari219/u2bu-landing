import React from 'react';
import PostForm from 'components/01_u2bu/common/PostForm';
import Layout from 'components/01_u2bu/common/Layout';

const index = () => {
	return (
		<Layout paddingOn>
			<h1>ApplyForm</h1>
			<div>Hello world</div>
			<section>
				<PostForm />
			</section>
		</Layout>
	);
};

export default index;
