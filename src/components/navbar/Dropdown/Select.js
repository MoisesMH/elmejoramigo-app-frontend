import styled from "@emotion/styled";

export const Select = styled.ul(props => ({
    display: props.show ? "flex" : "none",
    visibility: props.show ? "visible" : "none",
    flexDirection: props.column ? "column" : "row",
    background: props.background || "black",
    position: props.position || "absolute",
    transform: `translate(calc(min(calc(5vw), 1rem) * ${props.x}), calc(min(calc(0.2vw + 0.8rem), 1rem) * ${props.y}))`,
    listStyle: "none",
    // Margin
    margin: props.margin || 0,
    marginTop: props.marginTop,
    marginRight: props.marginRight,
    marginBottom: props.marginBottom,
    marginLeft: props.marginLeft,
    marginBlock: props.marginBlock,
    marginBlockStart: props.marginBlockStart,
    marginBlockEnd: props.marginBlockEnd,
    marginInline: props.marginInline,
    marginInlineStart: props.marginInlineStart,
    marginInlineEnd: props.marginInlineEnd,
    // Padding
    padding: props.padding || 0,
    paddingTop: props.paddingTop,
    paddingRight: props.paddingRight,
    paddingBottom: props.paddingBottom,
    paddingLeft: props.paddingLeft,
    paddingBlock: props.paddingBlock,
    paddingBlockStart: props.paddingBlockStart,
    paddingBlockEnd: props.paddingBlockEnd,
    paddingInline: props.paddingInline,
    paddingInlineStart: props.paddingInlineStart,
    paddingInlineEnd: props.paddingInlineEnd,
    // z-Index
    zIndex: props.z || 10
}))