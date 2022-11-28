import React, { useCallback } from 'react';
import { Button, Form, Input } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { ADD_POST } from 'actions/post';

const index = () => {
  const dispatch = useDispatch();
  const { handleSubmit, control, register } = useForm({
    mode: 'onChange',
    defaultValues: {
      applyName: '홍길동',
    },
  });

  const onSubmit = useCallback((applyName) => {
    // console.log({ applyName });
    dispatch(ADD_POST({ applyName }));
  }, []);
  return (
    <Form onFinish={handleSubmit(({ applyName }) => onSubmit(applyName))}>
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
          응모
        </Button>
      </div>
    </Form>
  );
};

export default index;
