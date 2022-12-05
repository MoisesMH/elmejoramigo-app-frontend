import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)(props => ({
    textDecoration: "none",
    fontSize: props.fontSize || "min(calc(0.8vw + 0.7rem), 2rem)",
    fontWeight: props.fontWeight || "400",
    fontFamily: props.fontFamily,
    lineHeight: props.lineHeight,
    letterSpacing: props.letterSpacing,
    color: props.color || "white",
    padding: props.padding || "1rem"
}))