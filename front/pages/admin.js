import React from 'react';
import AdminLayout from 'components/01_u2bu/admin/AdminLayout';
import { Row } from 'antd';
import { useSelector } from 'react-redux';

const admin = () => {
  const { me } = useSelector((state) => state.user);
  return (
    <AdminLayout>
      <h1>Admin</h1>
      {me ? (
        <>
          <h2>로그인상태</h2>
          <Row>
            <div>로그인 후 내용</div>
          </Row>
        </>
      ) : (
        <>
          <h2>로그아웃상태</h2>
          <Row>
            <div>로그아웃 내용</div>
          </Row>
        </>
      )}
    </AdminLayout>
  );
};

export default admin;