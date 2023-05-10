import { Button, Checkbox, Form, Input } from 'antd';
import { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';

const PostForm = () => {
  const {
    handleSubmit,
    register,
    getValues,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      applyName: '김철수',
      birth: '19990101',
    },
  });

  const onSubmit = useCallback((applyName, birth) => {
    console.log(applyName, birth);
  }, []);
  return (
    <>
      <Form
        onFinish={handleSubmit(({ applyName, birth }) =>
          onSubmit(applyName, birth)
        )}
      >
        <dl>
          <dt>
            <label htmlFor="applyName">이름</label>
          </dt>
          <dd>
            <Controller
              name="applyName"
              placeholder="이름"
              control={control}
              render={({ field }) => (
                <Input
                  {...register('applyName', {
                    required: '필수입력입니다.',
                  })}
                  {...field}
                />
              )}
            />
          </dd>
          <dt>
            <label htmlFor="birth">생년월일</label>
          </dt>
          <dd>
            <Controller
              name="birth"
              placeholder="YYYYMMDD"
              control={control}
              render={({ field }) => (
                <Input {...register('birth')} {...field} />
              )}
            />
          </dd>
        </dl>

        {/* <div>
          <Checkbox name="terms" checked={terms} onChange={onChangeTerms}>
            개인정보 수집 동의(필수)
          </Checkbox>
        </div> */}
        <div>
          <Button type="primary" htmlType="submit">
            응모하기
          </Button>
        </div>
      </Form>
    </>
  );
};

export default PostForm;
