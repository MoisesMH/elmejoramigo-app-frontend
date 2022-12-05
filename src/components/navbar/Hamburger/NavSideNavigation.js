import styled from "@emotion/styled";
import { mqFunc } from "../../styled/Breakpoints";
import { LinksList } from "../LinksList";

export const NavSideNavigation = styled(LinksList)(props => ({
    flexDirection: "column",
    background: "black",
    justifyContent: props.justify || "center",
    alignItems: "center",
    position: props.position || "fixed",
    height: props.height || "100vh",
    transform: "translateX(-100%)",
    transition: "transform 0.3s ease-out",
    inset: props.inset || "0 calc(40vw - 4rem) 0 0",
    [`&[data-visible="true"]`]: {
        transform: "translateX(0%)"
    },
    [`${mqFunc(
        (props.sm && 'sm') ||
        (props.md && 'md') ||
        (props.lg && 'lg') ||
        (props.xl && 'xl') ||
        (props.xxl && 'xxl') ||
        'md'
    )}`]: {
        display: "none",
        visibility: "hidden"
    },
    zIndex: 1
}))