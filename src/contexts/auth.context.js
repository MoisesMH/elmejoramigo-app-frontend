import { createContext, useContext } from "react";
import useAuthReducer from "../hooks/useAuthReducer";
import reducer from "../reducers/auth.reducer";

const defaultUser = {}

export const UserStateContext = createContext()
export const UserActionsContext = createContext()
export const UserAuthContext = createContext()

export const useAuthState = () => {
    const context = useContext(UserStateContext)
    if(context === undefined) throw new Error("useAuthState must be used within an AuthProvider")

    return context
}

export const useAuthActions = () => {
    const context = useContext(UserActionsContext)
    if(context === undefined) throw new Error("useAuthActions must be used within an AuthProvider")

    return context
}

export const useAuth = () => {
    const context = useContext(UserAuthContext)
    if(context === undefined) throw new Error("useAuth must be used within an AuthProvider")

    return context
}

export default function AuthProvider({ children }) {
    const [user, actions, isLoading, error] = useAuthReducer(reducer, defaultUser)
    const auth = [ isLoading, error ]
    
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
                <UserAuthContext.Provider value={auth}>
                    {children}
                </UserAuthContext.Provider>
            </UserActionsContext.Provider>
        </UserStateContext.Provider>
    )
}