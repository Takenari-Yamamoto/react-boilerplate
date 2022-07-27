/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useCallback, useState } from 'react';
import InputForm from './components/0_atoms/InputForm';

function App() {
  const containerStyle = css`
    flex-direction: column;
    display: flex;
    gap: 24px;
    padding: 124px;
  `;

  const [name, setName] = useState('');
  const handleInputName = useCallback((e: string) => setName(e), []);
  const [email, setEmail] = useState('');
  const handleInputEmail = useCallback((e: string) => setEmail(e), []);
  const [password, setPassword] = useState('');
  const handleInputPassword = useCallback((e: string) => setPassword(e), []);

  return (
    <div className="App">
      <div css={containerStyle}>
        <InputForm label="名前" handleChange={handleInputName} value={name} />
        <InputForm label="mail" handleChange={handleInputEmail} value={email} />
        <InputForm
          label="パスワード"
          handleChange={handleInputPassword}
          value={password}
        />
      </div>
    </div>
  );
}

export default App;
