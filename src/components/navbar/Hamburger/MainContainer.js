import styled from "@emotion/styled";
import { Flex } from "../../styled/Flex";

export const MainContainer = styled(Flex)(props => ({
    justifyContent: "center",
    alignItems: "center",
    width: "1.5rem",
    height: "1.5rem",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    margin: "clamp(0.1rem, calc(0.3vw + 0.1rem), 0.5rem)",
    // zIndex: 10,
}))