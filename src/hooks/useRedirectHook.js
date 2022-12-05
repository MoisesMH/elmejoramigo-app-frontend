import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useRedirectHook(link) {
    const navigate = useNavigate()
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        let isSubscribed = true
        if (clicked) {
            navigate(link)
        }
        return () => {
            setClicked(false)
            isSubscribed = false
        }
    }, [clicked])

    const trigger = () => !!link ? setClicked(true) : null

    return trigger
}