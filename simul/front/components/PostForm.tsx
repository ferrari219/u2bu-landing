import { Button, Checkbox, Form, Input } from 'antd';
import UseInput from 'hook/UseInput';
import { useCallback, useState } from 'react';

const PostForm = () => {
  const [applyName, onChangeApplyName, setApplyName] = UseInput('');
  const [birth, onChangeBirth, setbirth] = UseInput('');

  const [terms, setTerms] = useState(false);
  const [termsError, setTermsError] = useState(false);
  const onChangeTerms = useCallback(
    (e) => {
      setTermsError(false);
      setTerms(e.target.checked);
      // console.log(e.target.checked);
    },
    [terms]
  );

  const onSubmit = useCallback(() => {
    if (!terms) {
      return;
    }
    console.log(applyName, birth);
    // setApplyName('');
  }, [applyName, birth, terms]);
  return (
    <>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="applyName">이름</label>
          <Input
            name="applyName"
            value={applyName}
            onChange={onChangeApplyName}
            placeholder="이름"
            required
          />
        </div>
        <div>
          <label htmlFor="birth">생년월일</label>
          <Input
            name="birth"
            value={birth}
            onChange={onChangeBirth}
            placeholder="YYYYMMDD"
          />
        </div>
        <div>
          <Checkbox name="terms" checked={terms} onChange={onChangeTerms}>
            개인정보 수집 동의(필수)
          </Checkbox>
        </div>
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
