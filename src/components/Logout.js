import { useContext } from "react";
import { Navigate, redirect } from "react-router-dom";
import { UserActionsContext, UserStateContext } from "../contexts/auth.context";

export default function Logout() {
    const user = useContext(UserStateContext)
    const { logout } = useContext(UserActionsContext)
    if(Object.keys(user).length > 0) {
        logout()
        return <Navigate to="/" />
    }
    console.log("No se ha encontrado ninguna sesión");
    return <Navigate to="/" />
}