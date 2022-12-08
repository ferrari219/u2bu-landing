import React, { useEffect } from 'react';
import AdminLayout from 'components/01_u2bu/admin/AdminLayout';
import { Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import TableList from 'components/01_u2bu/admin/TableList';
import { LOAD_POSTS } from 'actions/post';
import useMobile from 'hook/useIsMobile';

const admin = () => {
  const isMobile = useMobile();
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);

  //Load Post
  useEffect(() => {
    dispatch(LOAD_POSTS());
    console.log('mainPosts:', mainPosts);
  }, []);
  const markUp = (
    <>
      {me ? (
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
      ) : (
        <>
          <h2>관리자 로그아웃 상태</h2>
          <Row>
            <div>로그인한 사용자만 열람 가능합니다.</div>
          </Row>
        </>
      )}
    </>
  );
  return (
    <AdminLayout>
      <h1>Admin</h1>
      {isMobile ? <div>{markUp}</div> : <div>{markUp}</div>}
    </AdminLayout>
  );
};

export default admin;
