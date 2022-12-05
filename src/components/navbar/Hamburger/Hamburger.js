import { useContext } from "react";
import { ShowNavSideActionsContext, ShowNavSideRefContext, ShowNavSideStateContext } from "../../../contexts/toggleNavbar.context";
import { MainContainer } from "./MainContainer";
import { MainLine } from "./MainLine";

function Hamburger() {
    const expanded = useContext(ShowNavSideStateContext)
    const ref = useContext(ShowNavSideRefContext)
    const { navSideToggle } = useContext(ShowNavSideActionsContext)
    return (
        <MainContainer
            aria-expanded={expanded}
            ref={ref}
            onClick={navSideToggle}
        >
            <MainLine
                expanded={expanded}
            ></MainLine>
        </MainContainer>
    )
}

export default Hamburger;