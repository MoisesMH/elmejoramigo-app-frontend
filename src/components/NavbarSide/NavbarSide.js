import { useContext } from "react";
import { ShowNavSideActionsContext, ShowNavSideStateContext } from "../../contexts/toggleNavbar.context";
import { NavSideNavigation } from "../navbar/Hamburger/NavSideNavigation";
import { Link } from "../navbar/Link";
import { LinkLi } from "../navbar/LinkLi";
import { LinksContainer } from "../navbar/LinksContainer";
import { NavSideContainer } from "../navbar/NavSideContainer";
import { Flex } from "../styled/Flex";

function NavbarSide({
    links = [
        {
            name: "Nosotros",
            to: "/nosotros"
        },
        {
            name: "Adopta",
            to: "/adopta"
        },
        {
            name: "Contactanos",
            to: "/contactanos"
        }
    ],
}) {
    const expanded = useContext(ShowNavSideStateContext)
    const { navSideHide } = useContext(ShowNavSideActionsContext)
    return (
        <Flex
            background="black"
            column
        >
            <NavSideContainer>
                <LinksContainer>
                    <NavSideNavigation
                        justify="center"
                        data-visible={expanded}
                    >
                        {
                            links.map(({ name, to }) => (
                                <Link to={to}>
                                    <LinkLi onClick={navSideHide}>
                                        {name}
                                    </LinkLi>
                                </Link>
                            ))
                        }
                    </NavSideNavigation>
                </LinksContainer>
            </NavSideContainer>
        </Flex>
        
    )
}

export default NavbarSide;