import React from 'react';
import { Form, Button, Input } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { SIGN_UP } from 'actions/user';
import { UserAddOutlined } from '@ant-design/icons';
import AdminLayout from 'components/01_u2bu/admin/AdminLayout';

const signup = () => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    control,
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

  return (
    <AdminLayout>
      <h1>SignUp</h1>
      <Form
        onFinish={handleSubmit(({ email, password }) => {
          dispatch(
            SIGN_UP({
              userid: 'admin',
              email,
              password,
            })
          );
        })}
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
                <Input {...register('userid')} {...field} readOnly />
              )}
            />
            <span>관리자아이디는 admin만 가능합니다.</span>
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
                    pattern: {
                      value: 1,
                      message: '1글자 이상 입력하세요',
                    },
                  })}
                  {...field}
                />
              )}
            />
          </dd>
          <dt>
            <label htmlFor="passwordCheck">비밀번호 한번더 입력</label>
          </dt>
          <dd>
            <Controller
              name="passwordCheck"
              control={control}
              render={({ field }) => (
                <Input
                  type="password"
                  {...register('passwordCheck', {
                    required: '비밀번호를 한번 더 입력하세요',
                    validate: {
                      matchPreviousPassword: (value) => {
                        const { password } = getValues();
                        return (
                          password === value || '비밀번호가 일치하지 않습니다.'
                        );
                      },
                    },
                  })}
                  {...field}
                />
              )}
            />
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
                      '비밀번호 분실 시 이메일로 비밀번호를 초기화할 수 있습니다.',
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: '이메일 형식에 맞지 않습니다',
                    },
                  })}
                  {...field}
                />
              )}
            />
          </dd>
        </dl>

        <div>
          <Button
            type="primary"
            htmlType="submit"
            icon={<UserAddOutlined />}
            shape="round"
            size="large"
          >
            가입하기
          </Button>
        </div>
      </Form>
    </AdminLayout>
  );
};

export default signup;
