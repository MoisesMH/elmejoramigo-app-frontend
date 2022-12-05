import styled from "@emotion/styled";

export const LinksList = styled.ul(props => ({
    display: props.display || "flex",
    justifyContent: props.justify,
    background: props.background,
    listStyle: "none",
    border: props.border,
    flex: `${props.flexGrow || 1} ${props.flexShrink || 1} ${props.flexBasis || "auto"}`,
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
    zIndex: props.z
}))