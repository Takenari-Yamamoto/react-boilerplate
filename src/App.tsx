/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function App() {
  const containerStyle = css`
    color: red;
  `;
  return (
    <div className="App">
      <div css={containerStyle}>たけちゃんの React のボイラープレートだよ</div>
    </div>
  );
}

export default App;
