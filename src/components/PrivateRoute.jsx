import React from 'react'
import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from '../hooks/Authprovider'

const PrivateRoute = () => {
    const username = useAuth()
    if (!username.token) return <Navigate to="/" />
    return <Outlet />
}

export default PrivateRoute