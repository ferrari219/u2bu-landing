import React from 'react';
import { Button, Form, Input, message } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN } from 'actions/user';

const LoginForm = () => {
  const dispatch = useDispatch();
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
    },
  });

  const { logInDone } = useSelector((state) => state.user);

  // useEffect(() => {
  //   if (logInDone) {
  //     message.warn('로그인 되었습니다.');
  //     Router.push('/admin');
  //   }
  // }, [logInDone]);
  return (
    <section>
      <Form
        onFinish={handleSubmit((userid, password) => {
          dispatch(LOG_IN(userid, password));
        })}
      >
        <h3>LoginForm</h3>
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
    </section>
  );
};

export default LoginForm;
