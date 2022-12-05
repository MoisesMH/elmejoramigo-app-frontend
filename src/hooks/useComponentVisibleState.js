import { useEffect, useRef } from 'react';
import useToggleState from "./useToggleState"

export default function useComponentVisibleState(initVal = false) {
    const [isComponentVisible, toggleComponentVisible, setIsComponentVisibleToFalse] = useToggleState(initVal);
    const ref = useRef();

    const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setIsComponentVisibleToFalse();
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [ref]);

    return [ref, isComponentVisible, toggleComponentVisible, setIsComponentVisibleToFalse];
}