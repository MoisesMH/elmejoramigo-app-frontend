import styled from "@emotion/styled";

export const Dot = styled.span(props => ({
    borderRadius: "50%",
    background: "white",
    position: "absolute",
    width: "clamp(3px, calc(0.3vw + 3px), 5px)",
    // height: "5px",
    aspectRatio: "1/1",
    transform: `translate(calc(8px * ${props.x}), calc(8px * ${props.y}))`
}))