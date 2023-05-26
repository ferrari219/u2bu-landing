import React, { useCallback } from 'react';
import { Button, Form, Input } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { SIGN_UP } from 'actions/user';

const signup = () => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      userId: '',
      userId: 'admin',
      password: '',
      // password: '1',
      email: '11',
      // email: 'ferrari219@nate.com',
    },
  });

  const onSubmit = useCallback((data) => {
    // console.log(data);
    const { userId } = data;
    if (userId !== 'admin')
      return console.log('admin 외 다른 아이디는 사용 불가합니다.');
    dispatch(SIGN_UP(data));
  }, []);
  return (
    <Form onFinish={handleSubmit((data) => onSubmit(data))}>
      <dl>
        <dt>
          <label htmlFor="userId">아이디</label>
        </dt>
        <dd>
          <Controller
            name="userId"
            control={control}
            render={({ field }) => (
              <Input
                {...register('userId', { required: '필수입력입니다.' })}
                {...field}
                readOnly
              />
            )}
          />
          {errors.userId && <span>{errors.userId.message}</span>}
        </dd>
        <dt>
          <label htmlFor="password">패스워드</label>
        </dt>
        <dd>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                type="password"
                {...register('password', { required: '필수입력입니다.' })}
                {...field}
              />
            )}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </dd>
        <dt>
          <label htmlFor="email">이메일</label>
        </dt>
        <dd>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                {...register('email', {
                  required:
                    '비밀번호 초기화시 사용할 이메일이니 필수로 입력바랍니다.',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: '이메일 형식이 아닙니다.',
                  },
                })}
                {...field}
              />
            )}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </dd>
      </dl>
      <div>
        <Button type="primary" htmlType="submit">
          회원가입
        </Button>
      </div>
    </Form>
  );
};

export default signup;
