import { Link } from "react-router-dom";
import useComponentVisibleState from "../../../hooks/useComponentVisibleState";
// import NineDots from "../../styled/NineDotsMenu/NineDots";
import { Option } from "./Option";
import { OptionField } from "./OptionField";
import RefMenu from "./RefMenu";
import { Select } from "./Select";

function Dropdown({
    label = "nav_dd",
    links = [
        {
            name: "Ver mascotas",
            to: "/mascotas"
        },
        {
            name: "Configuración",
            to: "/settings"
        }
    ],
    // Aria-options
    selectFieldId = "listbox1"
}) {
    const [ref, expanded, toggleExpanded, setMenuExpandedToFalse] = useComponentVisibleState()
    return (
        <>
            <RefMenu
                id={label}
                aria-expanded={expanded}
                aria-controls={selectFieldId}
                aria-haspopup="listbox"
                aria-labelledby={`${label}-label`}
                role="combobox"
                aria-activedescendant=""
                ref={ref}
                onClick={toggleExpanded}
                pointer
            />
            <Select
                column
                id={selectFieldId}
                role="listbox"
                aria-labelledby={`${label}-label`}
                // margin="0.5rem"
                show={expanded}
                x={-5}
                y={4.5}
            >
                {
                    links.map(({name, to}, i) => {
                        // const handleSelect = (e) => {
                        //     e.stopPropagation()
                        //     setMenuExpandedToFalse()
                        // }
                        return (
                            <Option
                                key={i}
                                id={`${label}-${i}`}
                                role="option"
                            >
                                <Link to={to} style={{ textDecoration: "none" }}>
                                    <OptionField
                                        onClick={setMenuExpandedToFalse}
                                    >
                                        {name}
                                    </OptionField>
                                </Link>
                            </Option>
                        )
                    }) || null
                }
            </Select>
        </>
    )
}

export default Dropdown;