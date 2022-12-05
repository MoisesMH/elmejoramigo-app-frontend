import { createContext, useContext, useEffect, useState } from "react";
import useAuthReducer from "../hooks/useAuthReducer";
import reducer from "../reducers/auth.reducer";

const defaultUser = {}

export const UserStateContext = createContext()
export const UserActionsContext = createContext()
export const UserAuthContext = createContext()

export default function AuthProvider({ children }) {
    const [user, actions] = useAuthReducer(reducer, defaultUser)
    console.log(user)
    const useAuth = () => useContext(UserStateContext)
    
    // useEffect(() => {
    //     let isApiSubscribed = true
    //     const handleAutoLogin = async () => {
    //         await actions.autoLogin()
    //     }
    //     if (isApiSubscribed && Object.keys(user).length === 0) {
    //         handleAutoLogin()
    //     }
    //     return () => {
    //         isApiSubscribed = false
    //     }
    // })

    return (
        // spreading because with useTodoState returns is an array, and we want an object
        // So we spread and wrap the values and functions in an object
        <UserStateContext.Provider value={user}>
            <UserActionsContext.Provider value={actions}>
                <UserAuthContext.Provider value={useAuth}>
                    {children}
                </UserAuthContext.Provider>
            </UserActionsContext.Provider>
        </UserStateContext.Provider>
    )
}