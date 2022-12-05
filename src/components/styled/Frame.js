import styled from "@emotion/styled";

export const Frame = styled('span')(props => ({
    display: props.display || "flex",
    maxWidth: props.maxWidth,
    minWidth: props.minWidth,
    width: props.width,
    height: props.height,
    flex: `${props.flexGrow || 0} ${props.flexShrink || 1} ${props.flexBasis || "auto"}`,
    aspectRatio: props.aspectRatio,
    margin: props.margin,
    padding: props.padding,
    justifyContent: props.justify,
    background: props.background,
    border: props.border,
    borderRadius: props.borderRadius,
    fontSize: props.fontSize
}))