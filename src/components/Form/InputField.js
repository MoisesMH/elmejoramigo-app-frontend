import styled from "@emotion/styled";

export const InputField = styled.input(props => ({
    display: props.display || "flex",
    // Other properties
    // Background
    background: props.background || "#B7E2F4",
    // Border properties
    border: props.border || 'none',
    borderRadius: props.borderRadius || '2px',
    color: props.color,
    outline: props.outline || "1px solid blue",
    // Font properties
    fontFamily: props.fontFamily,
    fontSize: props.fontSize || "clamp(1.1rem, 1.3vw, 1.3rem)",
    fontWeight: props.fontWeight,
    fontStretch: props.fontStretch,
    lineHeight: props.lineHeight,
    fontStyle: props.fontStyle,
    letterSpacing: props.letterSpacing,
    // Other properties
    // Flex
    flex: `${props.flexGrow || 0} ${props.flexShrink || 1} ${props.flexBasis || "auto"}`,
    flexWrap: props.wrap && 'wrap',
    // Width, height, maxWidth and maxHeight
    width: props.width,
    height: props.height,
    maxWidth: props.maxWidth,
    minWidth: props.minWidth,
    // Margin
    margin: props.margin || '0.5rem',
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
    padding: props.padding || '0.3rem',
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
    transition: "all 0.2s ease-out",
    // When hovered
    [`&:focus`]: {
        background: props.backgroundWhenFocus || "skyblue",
        outline: props.outlineWhenHover || "1px solid rgba(0,0,200,0.8)",
        boxShadow: props.boxShadowWhenHover ||
                    "3px 3px 5px 2px rgba(43, 85, 19, 0.8)",
        // color: "lightgray"
    },
}))