import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Form, Input } from 'antd';

const signup = () => {
  const { handleSubmit, control, register } = useForm({
    defaultValues: {
      userid: 'admin',
      password: '1',
      passwordCheck: '1',
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
          <Controller
            name="password"
            control={control}
            render={({ field }) => <Input type="password" {...field} />}
          />
        </dd>
        <dt>
          <label htmlFor="passwordCheck">비밀번호 한번더 입력</label>
        </dt>
        <dd>
          <Controller
            name="passwordCheck"
            control={control}
            render={({ field }) => <Input type="password" {...field} />}
          />
        </dd>
      </dl>
    </Form>
  );
};

export default signup;
