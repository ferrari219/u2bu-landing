import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input } from 'antd';

const signup = () => {
  const { handleSubmit, control } = useForm();
  return (
    <div>
      <dl>
        <dt>
          <label htmlFor="userid">아이디</label>
        </dt>
        <dd>
          <Controller
            name="userid"
            control={control}
            render={({ field }) => {
              <Input {...field} />;
            }}
          />
        </dd>
      </dl>
    </div>
  );
};

export default signup;
