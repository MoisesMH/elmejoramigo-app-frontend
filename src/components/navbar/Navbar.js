import { Link } from "./Link";
import { LinkLi } from "./LinkLi";
import { LinksList } from "./LinksList";
import { Flex } from "../styled/Flex";
import { LinksContainer } from "./LinksContainer";
import { useContext } from "react";
import { UserStateContext } from "../../contexts/auth.context";
// import NineDots from "../styled/NineDotsMenu/NineDots";
import Dropdown from "./Dropdown/Dropdown";
import Hamburger from "./Hamburger/Hamburger";
import { HamLinkLi } from "./Hamburger/HamLinkLi";
import { CenterLinksContainer } from "./CenterLinksContainer";
import { NavContainer } from "./NavContainer";

function Navbar({
    linksLeft = [
        {
            name: "El amigo eterno",
            to: "/"
        }
    ],
    linksMid = [
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
    linksRight = [
        {
            name: "Iniciar Sesion",
            to: "/login"
        },
        {
            name: "Registrarse",
            to: "/signup"
        }
    ]
}) {
    const user = useContext(UserStateContext)
    return (
        <Flex
            // background="#111"
            // justify="space-between"
            z={10}
        >
            <NavContainer
                flexGrow={1}
                background="#111"
                justify="space-between"
            >
                <LinksContainer
                    flexGrow={0.3}
                >
                    <LinksList
                        justify="flex-start"
                        marginInline="1rem"
                    >
                        <HamLinkLi>
                            <Hamburger />
                        </HamLinkLi>
                        {
                            linksLeft.map(({ name, to }) => (
                                <LinkLi>
                                    <Link to={to}>{name}</Link>
                                </LinkLi>
                            ))
                        }
                    </LinksList>
                </LinksContainer>
                <CenterLinksContainer
                    flexGrow={0.4}
                >
                    <LinksList
                        justify="space-evenly"
                    >
                        {
                            linksMid.map(({ name, to }) => (
                                <LinkLi>
                                    <Link to={to}>{name}</Link>
                                </LinkLi>
                            ))
                        }
                    </LinksList>
                </CenterLinksContainer>
                <LinksContainer
                    flexGrow={0.3}
                >
                    <LinksList
                        justify="flex-end"
                        marginInline="1rem"
                    >
                        {
                            Object.keys(user).length > 0 ?
                                <LinkLi>
                                    {/* <NineDots /> */}
                                    <Dropdown />
                                </LinkLi>
                                : null
                        }
                        {
                            linksRight.map(({ name, to }) => (
                                <LinkLi>
                                    <Link to={to}>{name}</Link>
                                </LinkLi>
                            ))
                        }
                    </LinksList>
                </LinksContainer>
            </NavContainer>
        </Flex>
    )
}

export default Navbar;