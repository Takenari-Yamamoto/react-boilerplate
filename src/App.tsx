/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Button from '@mui/material/Button';
import { useCallback, useState } from 'react';
import InputForm from './components/0_atoms/InputForm';

function App() {
  const appStyle = css`
    padding: 124px;
  `;

  const containerStyle = css`
    flex-direction: column;
    display: flex;
    gap: 24px;
  `;

  const resultStyle = css`
    margin-top: 24px;
    flex-direction: column;
    display: flex;
    gap: 24px;
    background-color: #d9d9d9;
    padding: 124px;
  `;

  const [name, setName] = useState('');
  const handleInputName = useCallback((e: string) => setName(e), []);

  const [email, setEmail] = useState('');
  const handleInputEmail = useCallback((e: string) => setEmail(e), []);

  const [password, setPassword] = useState('');
  const handleInputPassword = useCallback((e: string) => setPassword(e), []);

  const [isShowResult, toggle] = useState(false);

  return (
    <div css={appStyle}>
      <div css={containerStyle}>
        <InputForm
          label="名前"
          handleChange={handleInputName}
          value={name}
          required
        />
        <InputForm label="メール" handleChange={handleInputEmail} />
        <InputForm label="パスワード" handleChange={handleInputPassword} />
        <Button variant="contained" onClick={() => toggle(true)}>
          決定
        </Button>
      </div>

      {isShowResult && (
        <div css={resultStyle}>
          <p>名前: {name}</p>
          <p>メール: {email}</p>
          <p>パスワード: {password}</p>
          <Button variant="contained" onClick={() => toggle(false)}>
            閉じる
          </Button>
        </div>
      )}
    </div>
  );
}

export default App;
