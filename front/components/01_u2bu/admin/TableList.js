import React from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';

const TableList = ({ mainPosts }) => {
  const columns = [
    {
      title: '이름',
      dataIndex: 'applyName',
      key: 'applyName',
    },
    {
      title: '전화번호',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: '내용',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: '생년월일',
      dataIndex: 'birth',
      key: 'birth',
    },
    {
      title: '주소',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '이미지',
      dataIndex: 'Images',
      key: 'Images',
    },
  ];
  console.log(mainPosts);
  return (
    <>
      <Table columns={columns} dataSource={mainPosts} />
    </>
  );
};
TableList.prototypes = {
  mainPosts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TableList;
