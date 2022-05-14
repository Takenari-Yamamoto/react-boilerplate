/** @jsxImportSource @emotion/react */
import React, { useCallback, useState } from 'react';
import { css } from '@emotion/react';
import { Title } from './components/0_atoms/Title';
import { SubTitle } from './components/SubTitle';
import { Counter } from './components/0_atoms/Counter';
import { Button } from './components/0_atoms/Button';

const container = css`
  padding: 20px;
`;

const item = css`
  display: flex;
  gap: 10px;
`;

function App() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  useCallback(() => {}, []);

  // React.memoの中では、違う関数だと認識される
  const handleCountUpA = useCallback(() => {
    console.log('A');
    setCountA(countA + 1);
  }, [countA]);

  const handleCountUpB = useCallback(() => {
    console.log('A');
    setCountB(countB + 1);
  }, [countB]);

  console.log('-----------');

  return (
    <div css={container}>
      <Title title="useCallback" />
      <SubTitle title="アンケート：A？B？" />
      <div css={item}>
        <div>
          <Counter title="A" count={countA} />
          <Button title={'もちろんA！'} onClick={handleCountUpA} />
        </div>
        <div>
          <Counter title="B" count={countB} />
          <Button title={'もちろんB！'} onClick={handleCountUpB} />
        </div>
      </div>
    </div>
  );
}

export default App;
