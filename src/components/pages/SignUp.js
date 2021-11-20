import { useState } from "react";
import { useHistory } from "react-router";
import {
    BigText,
    BrandName,
    Button,
    FrontPageForm,
    FrontPageInput,
    PageStyle,
    TextButton,
} from "../shared/styledComponents";

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    let history = useHistory();

    function signUp(e) {
        e.preventDefault();
    }

    return (
        <PageStyle>
            <BigText>
                Bem vindo ao <BrandName>GratiBox</BrandName>
            </BigText>
            <FrontPageForm onSubmit={signUp}>
                <FrontPageInput
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    pattern='.{3,}'
                    title="Nomes devem ter no minimo 3 caracteres."
                    placeholder="Nome"
                    required
                />
                <FrontPageInput
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <FrontPageInput
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    pattern='.{4,}'
                    title="Senhas dever ter no minimo 4 caracteres."
                    placeholder="Senha"
                    required
                />
                <FrontPageInput
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    pattern={password}
                    title="Senhas devem ser iguais"
                    placeholder="Confirmar senha"
                    required
                />
                <Button
                    type="submit"
                    width="237px"
                    height="56px"
                    font="36px"
                    marginTop="60px"
                >
                    Cadastrar
                </Button>
                <TextButton onClick={() => history.push("/login")}>
                    Já sou grato
                </TextButton>
            </FrontPageForm>
        </PageStyle>
    );
}
