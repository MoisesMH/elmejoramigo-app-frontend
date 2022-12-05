import styled from "@emotion/styled";
import { mqFunc } from "../styled/Breakpoints";
import { LinksContainer } from "./LinksContainer";

export const CenterLinksContainer = styled(LinksContainer)(props => ({
    display: "none",
    visibility: "hidden",
    [`${mqFunc(
        (props.sm && 'sm') ||
        (props.md && 'md') ||
        (props.lg && 'lg') ||
        (props.xl && 'xl') ||
        (props.xxl && 'xxl') || 'md'
    )}`]: {
        display: "flex",
        visibility: "visible",
    },
}))