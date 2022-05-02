import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const AuthButton = () => {
  const auth = useContext(AuthContext);
  console.log(auth, 999);
  return (
    <React.Fragment>
      {auth ? <button>ログアウト</button> : <button>ログイン</button>}
    </React.Fragment>
  );
};
