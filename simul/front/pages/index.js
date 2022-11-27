import React, { useCallback } from 'react';
import { Button, Form, Input } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { ADD_POST } from 'actions/post';

const nodebird = () => {
  const dispatch = useDispatch();
  const { handleSubmit, control, register } = useForm({
    mode: 'onChange',
    defaultValues: {
      applyName: '홍길동',
    },
  });

  const onSubmit = useCallback((data) => {
    console.log(data);
    dispatch(ADD_POST(data));
  }, []);
  return (
    <>
      <Form onFinish={handleSubmit((applyName) => onSubmit(applyName))}>
        <dl>
          <dt>
            <label htmlFor="applyName">이름</label>
          </dt>
          <dd>
            <Controller
              name="applyName"
              control={control}
              render={({ field }) => (
                <Input {...register('applyName')} {...field} />
              )}
            />
          </dd>
        </dl>
        <div>
          <Button type="primary" htmlType="submit">
            응모하기
          </Button>
        </div>
      </Form>
    </>
  );
};

export default nodebird;
