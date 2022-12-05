import useRegisteredUserReducer from "./useRegisteredUserReducer"
import axios from "axios"

export default function useAuthReducer(reducer, initAuthState) {
    // We start with a piece of state: { todos: initTodos }
    const [user, dispatch] = useRegisteredUserReducer(reducer, initAuthState)

    const API_URL = "http://localhost:5000/users"
    const postConfig = {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        }
    }

    // These are like the actions in Vue.js
    const createUser = async (user) => {
        return axios.post(`${API_URL}/signup`, user, postConfig)
            .then(({ data, status }) => {
                dispatch({ type: "createUser", payload: { data } })
            })
            .catch((e) => e)
    }

    const getUser = async () => {
        return axios.get(`${API_URL}/whoami`, { withCredentials: true })
            .then(({ data, status }) => {
                dispatch({ type: "getUser" })
            })
            .catch((e) => e)
    }

    const editUser = async (user) => {
        return axios.patch(`${API_URL}/modify`, user, postConfig)
            .then(({ data, status }) => {
                dispatch({ type: "editUser", payload: { data } })
            })
            .catch((e) => e)
    }

    const removeUser = async () => {
        return axios.delete(`${API_URL}/remove`, { withCredentials: true })
            .then(({ data, status }) => {
                dispatch({ type: "removeUser" })
            })
            .catch((e) => e)
    }

    const login = async (user) => {
        return axios.post(`${API_URL}/login`, user, postConfig)
            .then(({ data, status }) => {
                dispatch({ type: "login", payload: { data } })
            })
            .catch((e) => e)
    }

    const logout = async () => {
        return axios.post(`${API_URL}/logout`, null, { withCredentials: true })
            .then(({ data, status }) => {
                dispatch({ type: "logout" })
            })
            .catch((e) => e)
    }

    const autoLogin = async () => {
        return axios.get(`${API_URL}/whoami`, { withCredentials: true })
            .then(({ data }) => {
                dispatch({ type: "login", payload: { data } })
            })
            .catch((e) => e)
    }

    // Declaring the actions object
    const actions = {
        createUser,
        getUser,
        editUser,
        removeUser,
        login,
        logout,
        autoLogin
    }

    return [
        user,
        actions
    ]
}