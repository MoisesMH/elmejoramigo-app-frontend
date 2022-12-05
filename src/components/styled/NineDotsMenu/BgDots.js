import styled from "@emotion/styled";
import { Flex } from "../Flex";

export const BgDots = styled(Flex)(props => ({
    position: "relative",
    // width: "70px",
    // height: "70px",
    marginRight: "clamp(0.1rem, calc(0.3vw + 0.1rem), 0.5rem)",
    width: "clamp(2.5rem, calc(2vw + 1.5rem), 3rem)",
    aspectRatio: "1/1",
    background: "#212532",
    borderRadius: "50%",
    cursor: "pointer",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.5s ease-out"
}))