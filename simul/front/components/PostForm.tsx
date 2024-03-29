import { Button, Checkbox, Form, Input } from 'antd';
import { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { ADD_POST } from 'actions/post';

const PostForm = () => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    getValues,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      // applyName: '',
      applyName: '김철수',
      // birth: '',
      birth: '19990101',
    },
  });

  // console.log(errors);

  const onSubmit = useCallback((data) => {
    // console.log(data);
    dispatch(ADD_POST(data));
  }, []);
  return (
    <>
      <Form onFinish={handleSubmit((data) => onSubmit(data))}>
        <dl>
          <dt>
            <label htmlFor="applyName">이름</label>
          </dt>
          <dd>
            <Controller
              name="applyName"
              control={control}
              render={({ field }) => (
                <Input
                  {...register('applyName', {
                    required: '필수 입력사항입니다.',
                  })}
                  {...field}
                  placeholder="이름"
                />
              )}
            />
            {errors.applyName && errors.applyName.message}
          </dd>
          <dt>
            <label htmlFor="birth">생년월일</label>
          </dt>
          <dd>
            <Controller
              name="birth"
              control={control}
              render={({ field }) => (
                <Input
                  {...register('birth', {
                    pattern: {
                      value: /^[0-9]*$/,
                      message: '형식에 맞게 숫자만 입력해주세요.',
                    },
                  })}
                  {...field}
                  placeholder="YYYYMMDD"
                />
              )}
            />
            {errors.birth && errors.birth.message}
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
