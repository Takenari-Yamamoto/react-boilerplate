/** @jsxImportSource @emotion/react */
import React from 'react';
import css from '@emotion/css';

type Props = {
  title: string;
  count: number;
};

export const Counter = React.memo(({ title, count }: Props) => {
  console.log(`Counter: ${title}`);
  return (
    <h1
      css={css`
        font-size: 20px;
        margin-bottom: 10px;
      `}
    >
      {title}派:<span> {count}人</span>
    </h1>
  );
});
