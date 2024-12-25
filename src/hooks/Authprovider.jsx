import { useContext, createContext, useState } from "react";

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    return <AuthContext.Provider value>{children}</AuthContext.Provider>
}

export default AuthProvider

export const useAuth = () => {
    return useContext(AuthContext)
}