import React, { useCallback } from 'react';
import { Button, Form, Input } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { LOG_IN } from 'actions/user';

const login = () => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      userid: 'admin',
      password: '1',
    },
  });

  const onLogin = useCallback((userid, password) => {
    // console.log({ userid, password });
    dispatch(LOG_IN({ userid, password }));
  }, []);

  return (
    <Form
      onFinish={handleSubmit(({ userid, password }) =>
        onLogin(userid, password)
      )}
    >
      <dl>
        <dt>
          <label htmlFor="userid">관리자아이디</label>
        </dt>
        <dd>
          <Controller
            name="userid"
            control={control}
            render={({ field }) => <Input {...field} readOnly />}
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
