import React from 'react';
import PropTypes from 'prop-types';
import wrapper from 'store/configureStore';

const app = ({ Component }) => {
  return (
    <>
      <Component />
    </>
  );
};
app.proptypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(app);
