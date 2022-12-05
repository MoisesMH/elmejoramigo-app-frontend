import styled from "@emotion/styled";

export const NavContainer = styled.nav(props => ({
    display: props.display || "flex",
    flexDirection: props.column ? "column" : "row",
    justifyContent: props.justify || "center",
    alignItems: props.alignItems || "center",
    alignContent: props.alignContent || "center",
    alignSelf: props.alignSelf,
    // Others
    // Flex properties
    flex: `${props.flexGrow || 0} ${props.flexShrink || 1} ${props.flexBasis || "auto"}`,
    flexWrap: props.wrap ? 'wrap' : props.flexWrap,
    // Background and border
    background: props.background || "black",
    border: props.border,
    // Width, height, maxWidth and maxHeight
    width: props.width,
    height: props.height,
    maxWidth: props.maxWidth,
    minWidth: props.minWidth,
    // Margin
    margin: props.margin,
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
    padding: props.padding,
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