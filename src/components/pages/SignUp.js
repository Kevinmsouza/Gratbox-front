import { useState } from "react";
import { useHistory } from "react-router";
import { postSignUp } from "../../services/gratibox";
import { sendAlert } from "../shared/alerts";
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
    const [isLoading, setIsloading] = useState(false);

    function signUp(e) {
        e.preventDefault();
        setIsloading(true);
        const body = {
            username: name,
            email,
            password,
        };
        postSignUp(body)
            .then(res => history.push("/login"))
            .catch(err => {
                sendAlert({
                    type: 'error',
                    title: 'Algo deu errado',
                    text: 'Email já utilizado. Tente novamente com outro email.'
                });
                setIsloading(false);
        });
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
                    pattern=".{3,}"
                    title="Nomes devem ter no minimo 3 caracteres."
                    placeholder="Nome"
                    required
                    disabled={isLoading}
                />
                <FrontPageInput
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="exemplo@exemplo.com"
                    placeholder="Email"
                    required
                    disabled={isLoading}
                />
                <FrontPageInput
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    pattern=".{4,}"
                    title="Senhas dever ter no minimo 4 caracteres."
                    placeholder="Senha"
                    required
                    disabled={isLoading}
                />
                <FrontPageInput
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    pattern={password}
                    title="Senhas devem ser iguais"
                    placeholder="Confirmar senha"
                    required
                    disabled={isLoading}
                />
                <Button
                    type="submit"
                    width="237px"
                    height="56px"
                    font="36px"
                    marginTop="60px"
                    disabled={isLoading}
                >
                    Cadastrar
                </Button>
                <TextButton onClick={() => isLoading || history.push("/login")}>
                    Já sou grato
                </TextButton>
            </FrontPageForm>
        </PageStyle>
    );
}
