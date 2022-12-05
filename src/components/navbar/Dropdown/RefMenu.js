import { forwardRef } from "react";
import RefNineDots from "../../styled/NineDotsMenu/RefNineDots";

const RefMenu = forwardRef(function refMenu(props, ref) {
    return (
        <RefNineDots
            {...props}
            ref={ref}
        />
    )
})

export default RefMenu;