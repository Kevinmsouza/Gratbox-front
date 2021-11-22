import { BigText, BlueText, BrandName, Button, CardImg, PageStyle, SmallText, WhiteBoard } from "../shared/styledComponents";
import image03 from "../../assets/images/image03.jpg";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { useHistory } from "react-router";
import styled from "styled-components";
import { getPlanInfo } from "../../services/gratibox";
import { sendAlert } from "../shared/alerts";

export default function PlanDetails() {
    const {userData} = useContext(UserContext);
    let history = useHistory();
    const [planInfo, setPlanInfo] = useState(null);

    useEffect(() => {
        if (!userData) history.push('/');
        else if (!userData.planId) history.push('/plans');
        else renderPlanInfo();
    }, [])

    function renderPlanInfo() {
        getPlanInfo(userData.token)
            .then(res => setPlanInfo(res.data))
            .catch(err => {
                sendAlert({
                    type: 'error',
                    title: 'Algo deu errado',
                    text: `Não conseguimos nos conectar com o servidor, tente novamente mais tarde`
                })
                history.push('/');
            })
    }

    if (!userData || !planInfo) return <PageStyle></PageStyle>

    return(
        <PageStyle>
            <BigText marginTop='55px'>
                <BrandName>Bom te ver por aqui, {userData.username}.</BrandName>
            </BigText>
            <SmallText>“Agradecer é arte de atrair coisas boas”</SmallText>
            <WhiteBoard height='382px'>
                <CardImg src={image03} height='172px' marginBottom='30px' />
                <TextWrapper>
                    <BlueText marginTop='0px'>Plano: <PinkText>{planInfo.planType}</PinkText></BlueText>
                    <BlueText marginTop='0px'>Data da assinatura: <PinkText>{planInfo.signDate}</PinkText></BlueText>
                    <BlueText marginTop='0px'>Próximas entregas:</BlueText>
                    <DateWrapper>
                        {planInfo.deliveryDates.map((date) => (
                            <BlueText marginTop='0px'>
                                <PinkText>{date}</PinkText>
                            </BlueText>
                        ))}
                    </DateWrapper>
                </TextWrapper>
                <ProductsWrapper>
                    {planInfo.products.map(e => <p>{e.name}</p>)}
                </ProductsWrapper>
            </WhiteBoard>
            <Button 
                width='237px' 
                height='56px'
                font='24px'
                marginTop='21px'
                onClick={() => sendAlert({
                    type: 'info',
                    title: 'Em breve',
                    text: `Em breve você poderá avaliar suas entregas a partir deste botão.`
                })}
            >
                Avaliar entregas
            </Button>
        </PageStyle>
    )
}

const TextWrapper = styled.div`
    width: 100%;
    padding: 0 18px;
`;

const DateWrapper = styled.div`
    width: 100%;
    padding: 0 45px;
`;

const PinkText = styled.span`
    color: #E63C80;
`;

const ProductsWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    color: #E63C80;
    font-size: 18px;
    line-height: 21px;
    margin-top: 25px;
    @media (max-width: 325px) {
        margin-top: 05px;
        font-size: 14px;
    }
`;