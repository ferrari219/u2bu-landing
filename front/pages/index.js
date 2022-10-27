import React, { useCallback, useRef } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';

import { ADD_POST } from 'actions/post';

const index = () => {
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
      applyName: '홍길동',
      birth: '2019-01-01',
      phone: '010-1234-5678',
      address: '서울',
      content: 'test',
    },
  });

  const imageInput = useRef();
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onSubmit = useCallback((applyName, birth, phone, address, content) => {
    console.log(applyName, birth, phone, address, content);
    dispatch(ADD_POST({ applyName, birth, phone, address, content }));
    // const formData = new FormData();

    // formData.append('applyName', applyName);
    // formData.append('birth', birth);
    // formData.append('phone', phone);
    // formData.append('address', address);
    // formData.append('content', content);

    // console.log(formData);
    // return dispatch(ADD_POST(formData));
  }, []);
  return (
    <>
      <h1>ApplyForm</h1>
      <div>Hello world</div>
      <section>
        <Form
          onFinish={handleSubmit(
            ({ applyName, birth, phone, address, content }) =>
              onSubmit(applyName, birth, phone, address, content)
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
            <dt>
              <label htmlFor="phone">연락처</label>
            </dt>
            <dd>
              <Controller
                name="phone"
                placeholder="01000000000"
                control={control}
                render={({ field }) => (
                  <Input
                    {...register('phone', { required: '필수입력입니다.' })}
                    {...field}
                  />
                )}
              />
            </dd>
            <dt>
              <label htmlFor="address">주소</label>
            </dt>
            <dd>
              <Controller
                name="address"
                control={control}
                render={({ field }) => (
                  <Input {...register('address')} {...field} />
                )}
              />
            </dd>
            <dt>
              <label htmlFor="address">내용</label>
            </dt>
            <dd>
              <Controller
                name="content"
                placeholder="응모할 내용을 적어주세요"
                control={control}
                render={({ field }) => (
                  <Input.TextArea {...register('content')} {...field} />
                )}
              />
            </dd>
            <dt>
              <label htmlFor="pic">이미지첨부</label>
            </dt>
            <dd>
              <input type="file" name="pic" multiple hidden />
            </dd>
          </dl>
          <div>
            <Controller
              name="terms"
              control={control}
              render={({ field }) => (
                <Checkbox
                  checked={field.value}
                  {...register('terms', {
                    required: '동의해야 응모 가능합니다.',
                  })}
                  {...field}
                >
                  개인정보 수집 동의(필수)
                </Checkbox>
              )}
            />
          </div>
          <div>
            <Button type="primary" size="large" shape="round" htmlType="submit">
              응모하기
            </Button>
          </div>
        </Form>
      </section>
    </>
  );
};

export default index;
