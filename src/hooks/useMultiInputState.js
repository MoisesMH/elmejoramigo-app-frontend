import { useState } from "react"

export default function useMultiInputState(initVal = "") {
    const [state, setState] = useState(initVal)

    const changeVal = (e) => {
        setState(st => ({
            ...st,
            [e.target.name]: e.target.value
        }))
    }
    const resetVal = () => setState("")

    return [state, changeVal, resetVal]
}