import styled from "@emotion/styled";

export const MainLine = styled.div(props => ({
    width: "100%",
    height: "2px",
    borderRadius: "5px",
    transition: "all 0.2s ease-in-out",
    transform: props.expanded ? "translateX(-50%)" : "all 0.3s ease-in-out",
    background: props.expanded ? "transparent" : "#fff",
    boxShadow: props.expanded ? "none" : "0 2px 5px rgba(255,101,47,.2)",
    [`&::before,
    &::after`]: {
        content: '""',
        display: "block",
        width: "auto",
        height: "2px",
        background: "#fff",
        borderRadius: "5px",
        boxShadow: "0 2px 5px rgba(255, 101, 47, .2)",
        transition: "all 0.3s ease-in-out"
    },
    [`&::before`]: {
        transform: props.expanded ? "rotate(45deg) translateX(40%) translateY(-0.5rem)" : "translateY(-0.5rem)",
    },
    [`&::after`]: {
        transform: props.expanded ? "rotate(-45deg) translateX(40%) translateY(0.5rem)" : "translateY(0.4rem)",
    }
}))