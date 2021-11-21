import { useState } from "react";
import { useHistory } from "react-router";
import { BigText, BrandName, Button, FrontPageForm, FrontPageInput, PageStyle, TextButton } from "../shared/styledComponents";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();
    const [isLoading, setIsloading] = useState(false);

    return(
        <PageStyle>
            <BigText>
                Bem vindo ao <BrandName>GratiBox</BrandName>
            </BigText>
            <FrontPageForm onSubmit={''}>
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