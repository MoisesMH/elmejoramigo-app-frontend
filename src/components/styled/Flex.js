import styled from "@emotion/styled"
import { mqFunc } from "./Breakpoints"

export const Flex = styled.div(props => ({
    display: props.display || 'flex',
    position: props.position || 'relative',
    top: props.top,
    right: props.right,
    bottom: props.bottom,
    left: props.left,
    cursor: props.pointer && 'pointer',
    flexDirection: ((props.column || props.screen) && 'column') || 
                    (props.screenReverse && 'row'),
    justifyContent: props.justify,
    alignItems: props.alignItems,
    alignContent: props.alignContent,
    alignSelf: props.alignSelf,
    // Responsiveness
    [`${mqFunc(
        (props.sm && 'sm') ||
        (props.md && 'md') ||
        (props.lg && 'lg') ||
        (props.xl && 'xl') ||
        (props.xxl && 'xxl')
    )}`]: {
        flexDirection: (props.screen && 'row') ||
                       (props.screenReverse && 'column')
    },
    // Flex properties
    flex: `${props.flexGrow || 0} ${props.flexShrink || 1} ${props.flexBasis || "auto"}`,
    flexWrap: props.wrap ? 'wrap' : props.flexWrap,
    // Background and border
    background: props.background,
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