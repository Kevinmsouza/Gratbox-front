import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import { BigText, BrandName, PageStyle, SmallText, BlueText, Button } from "../shared/styledComponents";
import image04 from "../../assets/images/image04.jpg"

export default function Plans() {
    const { userData, setUserData } = useContext(UserContext);
    let history = useHistory();

    useEffect(() => {
        if (!userData) history.push('/');
        if (userData.planId) history.push('/plan-details');
    }, [])

    return(
        <PageStyle>
            <BigText marginTop='55px'>
                <BrandName>Bom te ver por aqui, {userData.username}.</BrandName>
            </BigText>
            <SmallText>Você ainda não assinou um plano, que tal começar agora?</SmallText>
            <PlanCard>
                <CardImg src={image04} />
                <BlueText>
                    Você recebe um box por semana. 
                    Ideal para quem quer exercer a gratidão todos os dias.
                </BlueText>
                <Button 
                    width='168px' 
                    height='39px' 
                    font='24px' 
                    marginTop='40px'
                    onClick={() => history.push('/sign-plan/1')}
                >
                    Assinar
                </Button>
            </PlanCard>
            <PlanCard>
                <CardImg src={image04} />
                <BlueText>
                Você recebe um box por mês.      
                Ideal para quem está começando agora.
                </BlueText>
                <Button 
                    width='168px' 
                    height='39px' 
                    font='24px' 
                    marginTop='40px'
                    onClick={() => history.push('/sign-plan/2')}
                >
                    Assinar
                </Button>
            </PlanCard>
        </PageStyle>
    )
}

const PlanCard = styled.div`
    margin-top: 30px;
    width: 90vw;
    max-width: 358px;
    height: 400px;
    background: #E5CDB3;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CardImg = styled.img`
    width: 100%;
    height: 219px;
    border-radius: 25px;
    object-fit: cover;
`;