import axios from "axios";
import { useReducer } from "react";

export default function useRegisteredUserReducer(reducer, defaultUser) {
    const [user, dispatch] = useReducer(reducer, defaultUser, async () => {
        const API_URL = "http://localhost:5000/users"
        return axios.get(`${API_URL}/whoami`, { withCredentials: true })
            .then(({ data }) => {
                dispatch({ type: "login", payload: { data } || defaultUser })
                return data
            })
            .catch((e) => defaultUser)
    })

    return [user, dispatch]
}