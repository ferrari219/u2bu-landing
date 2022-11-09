import React, { useEffect } from 'react';
import AdminLayout from 'components/01_u2bu/admin/AdminLayout';
import { Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import TableList from 'components/01_u2bu/admin/TableList';
import { LOAD_POSTS } from 'actions/post';

const admin = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);

  //Load Post
  useEffect(() => {
    dispatch(LOAD_POSTS());
    console.log('mainPosts:', mainPosts);
  }, []);

  return (
    <AdminLayout>
      <h1>Admin</h1>
      <>
        <Row>
          <h2>로그인상태</h2>
          <div>로그인 후 내용</div>
        </Row>
        <Row>
          {JSON.stringify(mainPosts)}
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
