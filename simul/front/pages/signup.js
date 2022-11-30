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
    getValues,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      userid: 'admin',
      password: '1',
      passwordCheck: '1',
      email: 'ferrari219@nate.com',
    },
  });

  const onSubmit = useCallback((userid, password, email) => {
    // console.log({ userid, password, email });
    dispatch(SIGN_UP({ userid, password, email }));
  }, []);
  return (
    <Form
      onFinish={handleSubmit(({ userid, password, email }) =>
        onSubmit(userid, password, email)
      )}
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
              <Input
                {...register('userid', {
                  required: 'admin을 입력해주세요.',
                  pattern: {
                    value: /^admin$/,
                    message: '관리자 아이디는 admin외에는 불가합니다.',
                  },
                })}
                readOnly
                {...field}
              />
            )}
          />
          {<span>{errors.userid?.message}</span>}
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
                  required: '1글자 이상의 비밀번호를 입력해주세요.',
                  pattern: {
                    value: 1,
                    // value: /^[A-za-z0-9가-힣]{1,4}$/,
                    // message: '비밀번호는 4글자까지만 입력 가능합니다.',
                  },
                })}
                {...field}
              />
            )}
          />
          {<span>{errors.password?.message}</span>}
        </dd>
        <dt>
          <label htmlFor="passwordCheck">비밀번호 확인</label>
        </dt>
        <dd>
          <Controller
            name="passwordCheck"
            control={control}
            render={({ field }) => (
              <Input
                type="password"
                {...register('passwordCheck', {
                  required: '비밀번호를 확인해주세요.',
                  validate: (value) =>
                    value === getValues('password') ||
                    '비밀번호가 일치하지 않습니다.',
                })}
                {...field}
              />
            )}
          />
          {<span>{errors.passwordCheck?.message}</span>}
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
                  required: '이메일을 입력해주세요.',
                  pattern: {
                    value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: '이메일 형식이 아닙니다.',
                  },
                })}
                {...field}
              />
            )}
          />
          {<span>{errors.email?.message}</span>}
        </dd>
      </dl>
      <div>
        <Button type="primary" htmlType="submit">
          회원가입
        </Button>
        <Button>취소</Button>
      </div>
    </Form>
  );
};

export default signup;
