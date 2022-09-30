import React from 'react';
import { Form, Input } from 'antd';
import { Controller, useForm } from 'react-hook-form';

const admin = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      userid: 'admin',
      password: '1',
      password: '1',
      email: 'ferrari219@nate.com',
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
            render={({ field }) => (
              <Input {...register('userid')} {...field} readOnly />
            )}
          />
        </dd>
        <dt>
          <label htmlFor="password">비밀번호</label>
        </dt>
        <dd>
          <Controller />
        </dd>
      </dl>
    </Form>
  );
};

export default admin;
