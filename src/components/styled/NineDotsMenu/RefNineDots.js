import { forwardRef } from "react";
import { BgDots } from "./BgDots"
import { Dot } from "./Dot"

const RefNineDots = forwardRef(function RefNineDots(props, ref) {
    return (
        <BgDots
            {...props}
            ref={ref}
        >
            <Dot x={-1} y={-1}></Dot>
            <Dot x={0} y={-1}></Dot>
            <Dot x={1} y={-1}></Dot>
            <Dot x={-1} y={0}></Dot>
            <Dot x={0} y={0}></Dot>
            <Dot x={1} y={0}></Dot>
            <Dot x={-1} y={1}></Dot>
            <Dot x={0} y={1}></Dot>
            <Dot x={1} y={1}></Dot>
        </BgDots>
    )
})

export default RefNineDots;