import React from 'react';
import { Button, Form, Input } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { LOG_IN } from 'actions/user';

const login = () => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      userid: 'login',
      password: '1',
    },
  });
  return (
    <Form
      onFinish={handleSubmit((userid, password) => {
        dispatch(LOG_IN(userid, password));
      })}
    >
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
            render={({ field }) => (
              <Input
                type="password"
                {...register('password', {
                  required: '비밀번호를 입력하세요',
                })}
                {...field}
              />
            )}
          />
        </dd>
      </dl>
      <div>
        <Button type="primary" htmlType="submit">
          로그인
        </Button>
      </div>
    </Form>
  );
};

export default login;
