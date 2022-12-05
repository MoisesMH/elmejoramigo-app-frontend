import { InputField } from "./InputField";

export function Input({
    text,
    type,
    placeholder = null,
    name,
    id = name,
    required = false,
    handleChange
}) {
    return (
        <>
            <label htmlFor={id}>{text}</label>
            <InputField
                required={required}
                name={name}
                id={id}
                type={type}
                placeholder={placeholder}
                onChange={handleChange}
            />
        </>
    )
}