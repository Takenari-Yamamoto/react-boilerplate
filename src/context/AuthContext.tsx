import React, { createContext } from 'react';

type Props = {
  children: React.ReactNode;
};

export const AuthContext = createContext(false);

export const AuthProvider: React.VFC<Props> = ({ children }) => {
  return (
    <AuthContext.Provider value={false}>
      {/* ラップ予定のコンポーネント（children） */}
      {children}
    </AuthContext.Provider>
  );
};
