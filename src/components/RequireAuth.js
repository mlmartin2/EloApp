import { useContext, useEffect } from "react";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../App";

const RequireAuth = () =>
{
    const [user, setUser] = useContext(UserContext)

    return (
        user != null ? 
        <Outlet/>
        :
        <Navigate to='../' />
    )
}

export default RequireAuth