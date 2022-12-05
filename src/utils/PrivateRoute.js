import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserAuthContext } from "../contexts/auth.context"

function PrivateRoute() {
    const useAuth = useContext(UserAuthContext)
    const auth = useAuth()

    return !!auth.email ? <Outlet/> : <Navigate to="/login" />
}

export default PrivateRoute;