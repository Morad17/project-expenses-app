import { useContext, createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";


const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [token, setToken ] = useState(localStorage.getItem("username") || "")
    const navigate = useNavigate()
    const loginAction = async (data) => {
        try{        
            const res = await axios.post("https://project-expenses-app.onrender.com/login", {username, password})
            if (res.data) {
                setUsername(res.data.username)
                setToken(res.token)
                localStorage.setItem("username", res.token)
                console.log("successfully logged in")
                navigate("/")
                return
              }
            else throw new Error(res.message)
          } catch (err) {
            console.log(err)
          }
    }
    const logout = () => {
        setUsername(null)
        setToken("")
        localStorage.removeItem("username")
        console.log("successfully logged out")
        navigate("/")
    }

    return  <AuthContext.Provider value={{ token, username, loginAction, logout}}>
                {children}
            </AuthContext.Provider>
}

export default AuthProvider

export const useAuth = () => {
    return useContext(AuthContext)
}