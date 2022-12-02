import React, { useCallback } from 'react';
import { Button, Form, Input } from 'antd';
import { Controller, useForm } from 'react-hook-form';

const index = () => {
  const { control, handleSubmit, register } = useForm({
    defaultValues: {
      applyName: '김철수',
    },
  });

  const onSubmit = useCallback((data) => {}, []);

  return (
    <Form onFinish={handleSubmit(() => onSubmit())}>
      <dl>
        <dt>
          <label htmlFor="applyName">아이디</label>
        </dt>
        <dd>
          <Controller
            name="applyName"
            control={control}
            render={({ field }) => (
              <Input
                {...register('applyName', {
                  required: 'admin을 입력해주세요.',
                })}
                {...field}
              />
            )}
          />
        </dd>
      </dl>
      <div></div>
      <div>
        <Button type="primary" htmlType="submit">
          응모하기
        </Button>
      </div>
    </Form>
  );
};

export default index;
