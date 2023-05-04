import React, { useCallback } from 'react';
import { Form, Input } from 'antd';

const PostForm = () => {
  const onChangeApplyName = useCallback((e) => {}, []);
  const onSubmit = () => {};
  return (
    <>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="applyName">이름</label>
          <Input
            name="applyName"
            // value={applyName}
            onChange={onChangeApplyName}
            placeholder="이름"
            required
          />
        </div>
      </Form>
    </>
  );
};

export default PostForm;
