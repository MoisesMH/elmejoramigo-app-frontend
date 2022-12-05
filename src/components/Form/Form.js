import { Button } from "../styled/Button";
import { Container } from "../styled/Container";
import { Flex } from "../styled/Flex";
import { Input } from "./FormControl";

export function Form({ inputs, submit }) {
    return (
        <Container>
            <form onSubmit={submit.action}>
                {
                    inputs.map(input => (
                        <Flex column>
                            <Input
                                text={input.text}
                                type={input.type}
                                placeholder={input.placeholder}
                                name={input.name}
                                handleChange={input.handleChange}
                            />
                        </Flex>
                    ))
                }
                <Flex
                    justify="flex-end"
                    padding="0.5rem"
                >
                    <Button>{submit.text}</Button>
                </Flex>
            </form>
        </Container>
    )
}