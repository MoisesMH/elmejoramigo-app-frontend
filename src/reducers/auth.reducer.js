export default function reducer(state, { type, payload }) {
    const data = payload ? payload.data : {}
    // These are like the mutations on Vue.js
    switch (type) {
        case "createUser":
            return state

        case "getUser":
            return state

        case "editUser":
            return { ...state, ...data }

        case "removeUser":
            return {}

        case "login":
            return { ...state, ...data }

        case "logout":
            return {}

        default:
            return state
    }
}