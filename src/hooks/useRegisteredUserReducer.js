import axios from "axios";
import { useReducer, useState } from "react";

export default function useRegisteredUserReducer(reducer, defaultUser) {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [user, dispatch] = useReducer(reducer, defaultUser, async () => {
        setIsLoading(true)
        const API_URL = "http://localhost:5000/users"
        return axios.get(`${API_URL}/whoami`, { withCredentials: true })
            .then(({ data }) => {
                dispatch({ type: "login", payload: { data } || defaultUser })
                setIsLoading(false)
                return data
            })
            .catch((e) => {
                setError(true)
                return e
            })
    })

    return [user, dispatch, isLoading, error]
}