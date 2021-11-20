import { useState } from "react";
import { BigText, BrandName, Button, FrontPageForm, FrontPageInput, PageStyle } from "../shared/styledComponents";

export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');



    return (
        <PageStyle>
            <BigText>
                Bem vindo ao <BrandName>GratiBox</BrandName>
            </BigText>
            <FrontPageForm>
                <FrontPageInput 
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    pattern={/.{3,}/}
                    title='' 
                    placehoulder='Nome'
                />
                <FrontPageInput 
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    pattern={/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i}
                    title='' 
                    placehoulder='Email'
                />
                <FrontPageInput 
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    pattern={/.{4,}/}
                    title=''
                    placehoulder='Senha'
                />
                <FrontPageInput 
                    type='password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    pattern={password}
                    title='' 
                    placehoulder='Confirmar senha'
                />
                <Button></Button>
            </FrontPageForm>
        </PageStyle>
    );
}
