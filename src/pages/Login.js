import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "../components/Form/Form";
import { Flex } from "../components/styled/Flex";
import { UserActionsContext } from "../contexts/auth.context";
import useMultiInputState from "../hooks/useMultiInputState";

function Login() {
    // Context variables
    const { login } = useContext(UserActionsContext)
    // Functional component variables
    const navigate = useNavigate()

    const [userToLogIn, changeUserToLogIn] = useMultiInputState()
    const inputs = [
        { text: "Email", type: "text", placeholder: "Inserte su email...", name: "email", handleChange: changeUserToLogIn },
        { text: "Password", type: "password", placeholder: "Inserte su contraseña...", name: "password", handleChange: changeUserToLogIn },
    ]
    const submitAction = async (e) => {
        e.preventDefault()
        login(userToLogIn)
        return navigate("/")
    }
    const submit = {
        text: "Login",
        action: submitAction
    }

    return (
        <Flex
            maxWidth="100%"
            alignSelf="center"
            marginTop="1rem"
        >
            <Form
                inputs={inputs}
                submit={submit}
            />
        </Flex>
    )
}

export default Login;