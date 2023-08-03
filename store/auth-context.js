import {createContext, useState} from "react";

const initialState = {
  token: '',
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {}
}

export const AuthContext = createContext(initialState);

export default function AuthContextProvider({children}){
  const [authToken, setAuthToken] = useState('');

  function authenticate(token){
    setAuthToken(token);
  }

  function logout(){
    setAuthToken('');
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout
  }

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  )
}
