/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { memo } from 'react';
import { useForm } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
};

const HookDemo = () => {
  const containerStyle = css`
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  `;

  const inputStyle = css`
    border: 1px solid black;
    padding: 12px;
  `;

  const { register } = useForm<Inputs>();

  return (
    <div css={containerStyle}>
      Hook Demo
      <input css={inputStyle} defaultValue="test" {...register('name')} />
    </div>
  );
};

export default memo(HookDemo);
