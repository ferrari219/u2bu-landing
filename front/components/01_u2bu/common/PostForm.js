import React, { useCallback, useRef } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'assets/styles/theme';
import useMobile from 'hook/useIsMobile';

import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';

import { ADD_POST, UPLOAD_IMAGES } from 'actions/post';
import { backURL } from 'config/config';
import IndexLayout from './indexLayout';

const PostForm = () => {
  const isMobile = useMobile();
  const dispatch = useDispatch();
  const { imagePaths } = useSelector((state) => state.post);
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

  const onChangeImages = useCallback((e) => {
    console.log('images:', e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (image) => {
      imageFormData.append('image', image);
      console.log('imageFormData:', imageFormData);
    });
    dispatch(UPLOAD_IMAGES(imageFormData));
  }, []);

  const onSubmit = useCallback(
    (applyName, birth, phone, address, content) => {
      const formData = new FormData();
      imagePaths.forEach((image) => {
        formData.append('image', image);
      });
      formData.append('applyName', applyName);
      formData.append('birth', birth);
      formData.append('phone', phone);
      formData.append('address', address);
      formData.append('content', content);

      return dispatch(ADD_POST(formData));
    },
    [imagePaths]
  );
  const markUp = (
    <IndexLayout paddingOn>
      <Form
        onFinish={handleSubmit(
          ({ applyName, birth, phone, address, content, image }) =>
            onSubmit(applyName, birth, phone, address, content, image)
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
            <label htmlFor="image">이미지첨부</label>
          </dt>
          <dd>
            <div>
              <input
                type="file"
                name="image" // /back/routes/post.js upload.array('image') 와 일치해야함
                ref={imageInput}
                onChange={onChangeImages}
                multiple
                hidden
              />
              <Button onClick={onClickImageUpload}>업로드</Button>
            </div>
            <div>
              {imagePaths.map((v, i) => (
                <div key={v}>
                  <img src={`${backURL}/${v}`} alt={v} />
                  <div>
                    <Button>제거</Button>
                  </div>
                </div>
              ))}
            </div>
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
    </IndexLayout>
  );
  return (
    <>{isMobile ? <div css={moStyle}>{markUp}</div> : <div>{markUp}</div>}</>
  );
};
const moStyle = css``;

export default PostForm;
