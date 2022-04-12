import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({children}) =>
{
    const [auth, setAuth] = useState({});
    alert(Object.keys(auth))
    return (
        <AuthContext.Provider value ={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>)
}

export default AuthContext;