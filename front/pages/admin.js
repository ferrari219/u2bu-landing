import React from 'react';
import AdminLayout from 'components/01_u2bu/admin/AdminLayout';
import { Row } from 'antd';
import { useSelector } from 'react-redux';
import TableList from 'components/01_u2bu/admin/TableList';

const admin = () => {
  const { me } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  return (
    <AdminLayout>
      <h1>Admin</h1>
      <>
        <h2>로그인상태</h2>
        <Row>
          <div>로그인 후 내용</div>
          <TableList mainPosts={mainPosts} />
        </Row>
      </>
      {/* {me ? (
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
      )} */}
    </AdminLayout>
  );
};

export default admin;
