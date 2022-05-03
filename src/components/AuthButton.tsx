import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const AuthButton = () => {
  const auth = useContext(AuthContext);

  const handleSingOut = () => {
    auth?.setUserAuth(false);
  };

  const handleSingIn = () => {
    auth?.setUserAuth(true);
  };

  return (
    <React.Fragment>
      {auth?.userAuth ? (
        <button onClick={handleSingOut}>ログアウト</button>
      ) : (
        <button onClick={handleSingIn}>ログイン</button>
      )}
    </React.Fragment>
  );
};
