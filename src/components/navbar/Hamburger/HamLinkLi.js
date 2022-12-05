import styled from "@emotion/styled";
import { mqFunc } from "../../styled/Breakpoints";
import { LinkLi } from "../LinkLi";

export const HamLinkLi = styled(LinkLi)(props => ({
    visibility: "visible",
    [`${mqFunc(
        (props.sm && 'sm') ||
        (props.md && 'md') ||
        (props.lg && 'lg') ||
        (props.xl && 'xl') ||
        (props.xxl && 'xxl') || 'md'
    )}`]: {
        display: "none",
        visibility: "hidden",
    },
}))