import { useContext, createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";


const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [token, setToken ] = useState("")
    const navigate = useNavigate()
    const loginAction = async ({username, password}) => {
      try{        
        const res = await axios.post("https://project-expenses-app.onrender.com/login", {"username":username, "password": password})
        console.log("lk")
        if (res.data.length > 0) {
            console.log(res.data)
            setUser(res.data.username)
            setToken(username)
            localStorage.setItem("username", username)
            navigate(0)
            return
          }
        else throw new Error(res.message)
      } catch (err) {
        console.log(err)
      }
    }
    const logout = () => {
        setUser(null)
        setToken("")
        localStorage.removeItem("username")
        console.log("successfully logged out")
        navigate("/")
    }

    return <AuthContext.Provider value={{ token, user, loginAction, logout}}>
                {children}
            </AuthContext.Provider>
}

export default AuthProvider

export const useAuth = () => {
    return useContext(AuthContext)
}