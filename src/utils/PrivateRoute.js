// import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth, useAuthState } from "../contexts/auth.context"

function PrivateRoute() {
    // const useAuth = useContext(UserAuthContext)
    const [ isLoading, error ] = useAuth()
    const user = useAuthState()
    // To see if user was not logged in
    // console.log(error)

    return (
        error ? <Navigate to="/login" /> :
        isLoading ? <h1>Loading...</h1> :
            !!user.email ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoute;