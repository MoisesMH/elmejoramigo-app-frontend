import { useState } from "react";

export default function useToggleState(initVal = false) {
    const [state, setState] = useState(initVal)
    const toggle = () => setState(prevState => !prevState)
    const setFalse = () => setState(false)
    const setTrue = () => setState(true)

    return [state, toggle, setFalse, setTrue]
}