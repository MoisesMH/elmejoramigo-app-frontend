import { createContext } from "react";
import useComponentVisibleState from "../hooks/useComponentVisibleState";
// import useToggleState from "../hooks/useToggleState";

export const ShowNavSideStateContext = createContext()
export const ShowNavSideRefContext = createContext()
export const ShowNavSideActionsContext = createContext()

export default function ShowNavSideProvider({ children }) {
    // const [navSideState, navSideToggle] = useToggleState()
    const [navSideRef, navSideState, navSideToggle, navSideHide] = useComponentVisibleState()
    const navSideActions = {
        navSideToggle,
        navSideHide
    }

    return (
        <ShowNavSideRefContext.Provider value={navSideRef}>
            <ShowNavSideStateContext.Provider value={navSideState}>
                <ShowNavSideActionsContext.Provider value={navSideActions}>
                    {children}
                </ShowNavSideActionsContext.Provider>
            </ShowNavSideStateContext.Provider>
        </ShowNavSideRefContext.Provider>
    )
}

