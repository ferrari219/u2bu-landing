import React from 'react';
import { Form, Input } from 'antd';
import { useForm, Controller } from 'react-hook-form';

const index = () => {
  const { control } = useForm();
  return (
    <Form>
      <dl>
        <dt>
          <label htmlFor="applyName">이름</label>
        </dt>
        <dd>
          <Controller
            name="applyName"
            control={control}
            render={(field) => <Input {...field} />}
          />
        </dd>
      </dl>
    </Form>
  );
};

export default index;
