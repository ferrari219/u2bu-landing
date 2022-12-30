import React from 'react';
import PropTypes from 'prop-types';
import wrapper from 'store/configureStore';

const App = ({ Component }) => {
  return (
    <>
      <Component />
    </>
  );
};
App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
