import React, { createContext, useContext, useEffect, useState } from 'react';

export type userType = {
  loggedIn: boolean
  setLoggedIn: (l: boolean) => void
}

type AppContext = {
  children?: React.ReactNode;
}

export const UserContext = createContext<userType>({
  loggedIn: false,
  setLoggedIn: () => {}
})

export const useUserContext = () => useContext(UserContext)

const Context = ({children}: AppContext) => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <UserContext.Provider value = {{loggedIn, setLoggedIn}}>
      {children}
    </UserContext.Provider>
  );
};

export default Context;