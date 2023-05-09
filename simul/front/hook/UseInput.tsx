import React, { useCallback, useState } from 'react';

const UseInput = ({ initialValue = null }) => {
  const [value, setValue] = useState('');
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};
export default UseInput;
