import React, { useCallback } from 'react';
import { Button, Form, Input } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { SIGN_UP } from 'actions/user';

const signup = () => {
  const dispatch = useDispatch();
  const {
    control,
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      userid: 'admin',
      password: '2',
      passwordCheck: '2',
      email: 'ferrari219@nate.com',
    },
  });

  // 회원가입
  const onSubmit = useCallback((userid, password, email) => {
    // console.log({ userid });
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
          <label htmlFor="userid">관리자아이디</label>
        </dt>
        <dd>
          <Controller
            name="userid"
            control={control}
            render={({ field }) => (
              <Input
                {...register('userid', {
                  required: 'admin을 입력해주세요',
                })}
                {...field}
                readOnly
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
                  required: '비밀번호를 입력해주세요',
                  pattern: {
                    value: 1,
                    message: '비밀번호는 1자 이상입니다',
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
                  required: '비밀번호를 한번 더 입력해주세요',
                  validate: {
                    matchPreviousPassword: (value) => {
                      const { password } = getValues();
                      return (
                        password === value || '비밀번호가 일치하지 않습니다'
                      );
                    },
                  },
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
            render={({ field }) => <Input {...register('email')} {...field} />}
          />
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
