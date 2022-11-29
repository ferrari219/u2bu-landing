import React from 'react';
import { Form, Input } from 'antd';
import { Controller, useForm } from 'react-hook-form';

const signup = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
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
                // type="password"
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
      </dl>
    </Form>
  );
};

export default signup;
