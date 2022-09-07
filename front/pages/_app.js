import React from 'react';
import PropTypes from 'prop-types';

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

export default app;
