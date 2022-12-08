import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const useIsMobile = () => {
  const [isMobile, setisMobile] = useState();
  const mobile = useMediaQuery({
    query: '(max-width: 900px)',
  });

  useEffect(() => {
    console.log(mobile);
    setisMobile(mobile);
  }, [mobile]);
  return isMobile;
};

export default useIsMobile;
