import { useEffect } from "react";
import { useLocation, Navigate, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () =>
{
    const {auth} = useAuth();
    const location = useLocation();
    const navigate = useNavigate()
    useEffect(() =>
    {
        if(auth?.user) {alert('Auth')}
        else alert('Not auth')
    }, [auth])
    return (
        navigate('/home')
    );
}

export default RequireAuth;