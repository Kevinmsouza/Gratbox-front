import styled from "styled-components";
import { BigText, BrandName, Button, SmallText, TextButton } from "../shared/styledComponents";
import BGimageSrc from "../../assets/images/image05.webp";
import { useHistory } from "react-router";

export default function Home() {
    let history = useHistory();

    return (
        <HomeStyle>
            <BigText marginTop='55px'>
                Bem vindo ao <BrandName>GratiBox</BrandName>
            </BigText>
            <SmallText>
                Receba em casa um box com chás, produtos organicos, incensos e
                muito mais...
            </SmallText>
            <BGImage onClick={()=> history.push('/sign-up')}>
                <Button>Quero começar</Button>
            </BGImage>
            <TextButton onClick={()=> history.push('/login')}>Já sou grato</TextButton>
        </HomeStyle>
    );
}

const HomeStyle = styled.div`
    background: linear-gradient(180deg, #6d7ce4 50%, #4d65a8 50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
`;

const BGImage = styled.div`
    width: 100vw;
    height: 100vw;
    background-image: url(${BGimageSrc});
    background-repeat: no-repeat;
    background-position: "center";
    background-size: 100vw 100vw;
    object-fit: contain;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
`;
