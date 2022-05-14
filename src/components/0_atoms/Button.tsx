/** @jsxImportSource @emotion/react */
import css from '@emotion/css';
import React from 'react';

type Props = {
  title: string;
  onClick: () => void;
};

const buttonStyle = css`
  background-color: #13448f;
  border-radius: 22px;
  border: none;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  width: 160px;
  cursor: pointer;
`;

// React.memo でラップすることでボタンコンポーネント に渡す props に変更がない場合は再レンダリングされない
// react.memoでProps の前後の値を比較してレンダリングするかを決定している
export const Button = React.memo(({ title, onClick }: Props) => {
  console.log(`Button: ${title}`);
  return (
    <button css={buttonStyle} onClick={onClick} type="button">
      {title}
    </button>
  );
});
