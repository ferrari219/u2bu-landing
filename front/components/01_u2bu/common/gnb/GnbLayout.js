import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';

const GnbLayout = () => {
  const { me } = useSelector((state) => state.user);
  return (
    <header>
      <h2>Header</h2>
      {me ? <UserProfile /> : <LoginForm />}
      <nav>
        <h3>Menu on/off</h3>
      </nav>
    </header>
  );
};

export default GnbLayout;
