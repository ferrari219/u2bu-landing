import React from 'react';
import PostForm from 'components/01_u2bu/common/PostForm';
import Section1 from 'components/01_u2bu/sec/Section1';
import Section2 from 'components/01_u2bu/sec/Section2';
import KeyVisual from 'components/01_u2bu/sec/KeyVisual';

const index = () => {
  return (
    <>
      <h1>ApplyForm</h1>
      <KeyVisual />
      <Section1 />
      <Section2 />
      <PostForm />
    </>
  );
};

export default index;
