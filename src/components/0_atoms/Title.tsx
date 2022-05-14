/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

type Props = {
  title: string;
};

const titleStyle = css`
  font-size: 22px;
`;

export const Title = React.memo(({ title }: Props) => {
  return <h1 css={titleStyle}>{title}</h1>;
});
