import { useContext } from "react";
import useMultiInputState from "../hooks/useMultiInputState"
import { Flex } from "../components/styled/Flex";
import { Form } from "../components/Form/Form";
import { UserActionsContext } from "../contexts/auth.context";
import { useNavigate } from "react-router-dom";

function Register() {
    // Context variables
    const { createUser } = useContext(UserActionsContext)
    // Functional component variables
    const navigate = useNavigate()

    const [newUser, changeNewUser] = useMultiInputState()
    const inputs = [
        { text: "Nombre y apellido", type: "text", placeholder: "Inserte su primer nombre y apellidos...", name: "name", handleChange: changeNewUser },
        { text: "Email", type: "email", placeholder: "Inserte su correo...", name: "email", handleChange: changeNewUser },
        { text: "Password", type: "password", placeholder: "Inserte su contraseña...", name: "password", handleChange: changeNewUser },
        { text: "Celular", type: "text", placeholder: "Inserte su celular...", name: "phone", handleChange: changeNewUser },
    ]
    const submitAction = (e) => {
        e.preventDefault()
        createUser(newUser)
        return navigate("/")
    }
    const submit = {
        text: "Register",
        action: submitAction
    }
    return (
        <Flex
            maxWidth="100%"
            marginTop="1rem"
        >
            <Form
                inputs={inputs}
                submit={submit}
            />
        </Flex>
    )
}

export default Register;