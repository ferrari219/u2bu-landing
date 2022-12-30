import React from 'react';
import { Form, Input } from 'antd';
import { Controller, useForm } from 'react-hook-form';

const PostForm = () => {
  const { handleSubmit, control } = useForm();
  return (
    <Form>
      <div>
        <dl>
          <dt>
            <label htmlFor="applyName">이름</label>
          </dt>
          <dd>
            <Controller
              name="applyName"
              control={control}
              render={({ field }) => <Input placeholder="이름" {...field} />}
            />
          </dd>
        </dl>
        <div>
          <input type="file" name="image" ref={iamgeInput} />
        </div>
      </div>
    </Form>
  );
};

export default PostForm;
