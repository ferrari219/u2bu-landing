import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Form, Input } from 'antd';

const signup = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      userid: 'admin',
      email: 'ferrari219@nate.com',
      password: '1',
    },
  });
  return (
    <Form>
      <dl>
        <dt>
          <label htmlFor="userid">아이디</label>
        </dt>
        <dd>
          <Controller
            name="userid"
            control={control}
            render={({ field }) => {
              <Input />;
            }}
          />
        </dd>
      </dl>
    </Form>
  );
};

export default signup;
