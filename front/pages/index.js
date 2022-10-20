import React from 'react';
import { Form, Input } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

const index = () => {
  const dispatch = useDispatch();
  const {
    register,
    control,
    getValues,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });
  return (
    <>
      <h1>ApplyForm</h1>
      <div>Hello world</div>
      <section>
        <Form>
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
            <dt>
              <label htmlFor=""></label>
            </dt>
            <dd>
              <Controller
                name=""
                control={control}
                render={({ field }) => {
                  <Input {...field} />;
                }}
              />
            </dd>
          </dl>
        </Form>
      </section>
    </>
  );
};

export default index;
