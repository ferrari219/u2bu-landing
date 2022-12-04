import React from 'react';
import { Button, Form, Input } from 'antd';
import { useForm, Controller } from 'react-hook-form';

const signup = () => {
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
    },
  });
  return (
    <Form onFinish={handleSubmit()}>
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
                {...register('userid', { required: 'admin을 입력해주세요' })}
                {...field}
              />
            )}
          />
        </dd>
        <dt>
          <label htmlFor="password">비밀번호</label>
        </dt>
        <dd>
          <Controller name="password" control={control} render= />
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

export default signup;
