import React from 'react';
import { Avatar, Button, Card, Form } from 'antd';
import { useDispatch } from 'react-redux';
import { LOG_OUT } from 'actions/user';

const UserProfile = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(LOG_OUT());
  };
  return (
    <Form onFinish={handleLogOut}>
      <h3>UserProfile</h3>
      <Card>
        <Card.Meta
          avatar={
            <Avatar src="https://joeschmoe.io/api/v1/random">test</Avatar>
          }
          title="관리자님"
          description="test"
        />
        <div>
          <Button type="primary" htmlType="submit">
            로그아웃
          </Button>
        </div>
      </Card>
    </Form>
  );
};

export default UserProfile;
