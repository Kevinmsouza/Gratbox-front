import { useContext, useState } from "react";
import { useHistory } from "react-router";
import AuthContext from "../../contexts/AuthContext";
import { postLogin } from "../../services/gratibox";
import { sendAlert } from "../shared/alerts";
import { BigText, BrandName, Button, FrontPageForm, FrontPageInput, PageStyle, TextButton } from "../shared/styledComponents";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();
    const [isLoading, setIsloading] = useState(false);
    const {setToken} = useContext(AuthContext);

    function login(e) {
        e.preventDefault();
        setIsloading(true);
        const body = {
            email,
            password,
        };
        postLogin(body)
            .then(res => {
                setToken(res.data);
                history.push("/plan");
            })
            .catch(err => {
                sendAlert({
                    type: 'error',
                    title: 'Algo deu errado',
                    text: 'Email/senha incorreto(s), tente novamente.'
                });
                setPassword("")
                setIsloading(false);
        });
    }

    return(
        <PageStyle>
            <BigText>
                Bem vindo ao <BrandName>GratiBox</BrandName>
            </BigText>
            <FrontPageForm onSubmit={login}>
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
                    placeholder="Senha"
                    required
                    disabled={isLoading}
                />
                <Button
                    type="submit"
                    width="237px"
                    height="56px"
                    font="36px"
                    marginTop="140px"
                    disabled={isLoading}
                >
                    Login
                </Button>
                <TextButton onClick={() => isLoading || history.push("/sign-up")}>
                    Ainda não sou grato
                </TextButton>
            </FrontPageForm>
        </PageStyle>
    )
}