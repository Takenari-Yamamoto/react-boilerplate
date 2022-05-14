/** @jsxImportSource @emotion/react */
import React from 'react';
import css from '@emotion/css';

type Props = {
  title: string;
};

export const SubTitle = ({ title }: Props) => {
  return (
    <h2
      css={css`
        padding: 10px;
      `}
    >
      {title}
    </h2>
  );
};
