import React, { useCallback, useRef } from 'react';
import { Button, Form, Input } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_POST, UPLOAD_IMAGES } from 'actions/post';
import { backURL } from 'config/config';

const index = () => {
	const dispatch = useDispatch();
	const { imagePaths } = useSelector((state) => state.post);
	const { control, handleSubmit, register } = useForm({
		defaultValues: {
			applyName: '김철수',
		},
	});

	// 이미지 업로드
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

	const onSubmit = useCallback(
		(applyName) => {
			const formData = new FormData();
			imagePaths.forEach((p) => {
				formData.append('image', p);
			});
			formData.append('applyName', applyName);
			return dispatch(ADD_POST(formData));
			// dispatch(ADD_POST({ applyName }));
		},
		[imagePaths]
	);
	return (
		<Form onFinish={handleSubmit(({ applyName }) => onSubmit(applyName))}>
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
							<Button>제거</Button>
						</div>
					</div>
				))}
			</div>
			<div>
				<Button type="primary" htmlType="submit">
					응모하기
				</Button>
			</div>
		</Form>
	);
};

export default index;
