import React, { useCallback } from 'react';
import { Button, Form, Input } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { ADD_POST } from '../actions/post';

const index = () => {
	const dispatch = useDispatch();
	const { control, handleSubmit, register } = useForm({
		defaultValues: {
			applyName: '김철수',
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
