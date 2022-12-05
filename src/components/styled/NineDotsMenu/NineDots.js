import { BgDots } from "./BgDots";
import { Dot } from "./Dot";

function NineDots() {
    return (
        <BgDots>
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
}

export default NineDots;