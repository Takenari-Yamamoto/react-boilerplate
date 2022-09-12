/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const styles = {
  app: css`
    padding: 40px;
  `,
  container: css`
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
  `,
  input: css`
    border: 1px solid gray;
    border-radius: 4px;
    height: 40px;
    width: 100%;
  `,
  button: css`
    /* border: 1px solid ; */
    border-radius: 4px;
    height: 40px;
    width: 100%;
    background-color: #1ea5ff;
    color: white;

    &:hover {
      background-color: #0a93ee;
    }
  `,
  error: css`
    font-size: 12px;
    color: red;
  `,
};

type Inputs = {
  email: string;
  password: string;
};

function App() {
  const [showSection2, toggleSection] = useState(false);
  const { register, handleSubmit, formState: state } = useForm<Inputs>();

  console.log(state.errors);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    toggleSection(true);
  };

  return (
    <div css={styles.app}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div css={styles.container}>
          <label htmlFor="email">Email</label>
          <input
            css={styles.input}
            id="email"
            {...register('email', {
              required: {
                value: true,
                message: '入力が必須の項目です。',
              },
              maxLength: { value: 10, message: '10文字以内で入力してください' },
            })}
          />
          <p css={styles.error}>{state.errors.email?.message}</p>
        </div>
        <div css={styles.container}>
          <label htmlFor="password">パスワード</label>
          <input
            css={styles.input}
            id="password"
            type="password"
            {...register('password', {
              required: {
                value: true,
                message: '入力が必須の項目です。',
              },
              maxLength: { value: 10, message: '10文字以内で入力してください' },
            })}
          />
          <p css={styles.error}>{state.errors.password?.message}</p>
        </div>
        <button css={styles.button} type="submit">
          登録
        </button>
      </form>
      {showSection2 && (
        <div>
          <p>Section2</p>
        </div>
      )}
    </div>
  );
}

export default App;
