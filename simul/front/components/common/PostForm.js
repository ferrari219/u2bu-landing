import React, { useCallback, useRef } from 'react';
import { Button, Form, Input } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { backURL } from 'config/config';
import { ADD_POST, UPLOAD_IMAGES } from 'actions/post';
import { useDispatch, useSelector } from 'react-redux';
import postSlice from 'reducers/post';

const PostForm = () => {
  const dispatch = useDispatch();
  const { imagePaths } = useSelector((state) => state.post);
  const { handleSubmit, control } = useForm({
    mode: 'onChange',
    defaultValues: {
      applyName: '김철수',
    },
  });
  //upload image
  const imageInput = useRef();
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);
  const onChangeImages = useCallback((e) => {
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append('image', f);
    });
    return dispatch(UPLOAD_IMAGES(imageFormData));
  }, []);
  const onRemoveImage = useCallback(
    (index) => () => {
      dispatch(postSlice.actions.REMOVE_IMAGES(index));
    },
    []
  );
  const onSubmit = useCallback(
    (applyName) => {
      const formData = new FormData();
      imagePaths.forEach((f) => {
        formData.append('image', f);
      });
      formData.append('applyName', applyName);
      return dispatch(ADD_POST(formData));
    },
    [imagePaths]
  );
  return (
    <Form onFinish={handleSubmit(({ applyName }) => onSubmit(applyName))}>
      <div>
        <dl>
          <dt>
            <label htmlFor="applyName">이름</label>
          </dt>
          <dd>
            <Controller
              name="applyName"
              control={control}
              render={({ field }) => <Input placeholder="이름" {...field} />}
            />
          </dd>
        </dl>
        <div>
          <input
            type="file"
            name="image"
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
                <Button onClick={onRemoveImage(i)}>제거</Button>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Button type="primary" htmlType="submit">
            응모하기
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default PostForm;
