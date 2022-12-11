import React from 'react';
import useMobile from 'hook/useIsMobile';

const Layout = ({ children }) => {
  const isMobile = useMobile();
  const markUp = (
    <section>
      <div>{children}</div>
    </section>
  );
  return <>{isMobile ? <div>{markUp}</div> : <div>{markUp}</div>}</>;
};

export default Layout;
