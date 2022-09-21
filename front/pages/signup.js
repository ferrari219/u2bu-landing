import { Input } from 'antd';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

const singup = () => {
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
      passwordCheck: '1',
      email: 'ferrari219@nate.com',
    },
  });
  return (
    <>
      <form>
        <dl>
          <dt>
            <label htmlFor="userid">관리자아이디</label>
          </dt>
          <dd>
            <Controller
              name="userid"
              control={control}
              render={({ field }) => (
                <Input {...register} {...field} readOnly />
              )}
            />
          </dd>
        </dl>
      </form>
    </>
  );
};

export default singup;
