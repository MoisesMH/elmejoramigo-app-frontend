import styled from "@emotion/styled";
import { mqFunc } from "./Breakpoints";
import { Flex } from "./Flex";

export const Container = styled(Flex)(props => ({
    maxWidth: "100%",
    margin: props.margin || "auto",
    [`${mqFunc('sm')}`]: {
        maxWidth: props.fluid ? "100%" : '540px'
    },
    [`${mqFunc('md')}`]: {
        maxWidth: props.fluid ? "100%" : '720px'
    },
    [`${mqFunc('lg')}`]: {
        maxWidth: props.fluid ? "100%" : '960px'
    },
    [`${mqFunc('xl')}`]: {
        maxWidth: props.fluid ? "100%" : '1140px'
    },
    [`${mqFunc('xxl')}`]: {
        maxWidth: props.fluid ? "100%" : '1320px'
    },
}))

export const ContainerMd = styled(Flex)(props => ({
    maxWidth: "100%",
    margin: props.margin || "auto",
    [`${mqFunc('md')}`]: {
        maxWidth: props.fluid ? "100%" : '720px'
    },
    [`${mqFunc('lg')}`]: {
        maxWidth: props.fluid ? "100%" : '960px'
    },
    [`${mqFunc('xl')}`]: {
        maxWidth: props.fluid ? "100%" : '1140px'
    },
    [`${mqFunc('xxl')}`]: {
        maxWidth: props.fluid ? "100%" : '1320px'
    },
}))

export const ContainerLg = styled(Flex)(props => ({
    maxWidth: "100%",
    margin: props.margin || "auto",
    [`${mqFunc('lg')}`]: {
        maxWidth: props.fluid ? "100%" : '960px'
    },
    [`${mqFunc('xl')}`]: {
        maxWidth: props.fluid ? "100%" : '1140px'
    },
    [`${mqFunc('xxl')}`]: {
        maxWidth: props.fluid ? "100%" : '1320px'
    },
}))

export const ContainerXl = styled(Flex)(props => ({
    maxWidth: "100%",
    margin: props.margin || "auto",
    [`${mqFunc('xl')}`]: {
        maxWidth: props.fluid ? "100%" : '1140px'
    },
    [`${mqFunc('xxl')}`]: {
        maxWidth: props.fluid ? "100%" : '1320px'
    },
}))

export const ContainerXxl = styled(Flex)(props => ({
    maxWidth: "100%",
    margin: props.margin || "auto",
    [`${mqFunc('xxl')}`]: {
        maxWidth: props.fluid ? "100%" : '1320px'
    },
}))