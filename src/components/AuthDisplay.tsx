import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const AuthDisplay = () => {
  const auth = useContext(AuthContext);
  console.log(auth);
  return <div>{auth ? <p>ログイン中</p> : <p>ログアウト中</p>}</div>;
};
