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

export const Button = ({ title, onClick }: Props) => {
  return (
    <button css={buttonStyle} onClick={onClick} type="button">
      {title}
    </button>
  );
};
