import { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import UserContext from "../../contexts/UserContext";
import { BigText, BlueText, BrandName, Button, CardImg, PageStyle, Select, SmallText, WhiteBoard } from "../shared/styledComponents";
import image03 from "../../assets/images/image03.jpg";
import styled from "styled-components";
import NewPlanContext from "../../contexts/NewPlanContext";

export default function SignPlan() {
    const { userData } = useContext(UserContext);
    let history = useHistory();
    const { planId } = useParams();
    const [ selectPlanId, setSelectPlanId] = useState(planId);
    const [ deliveryType, setDeliveryType] = useState(0);
    const [ products, setProducts ] = useState([true, true, true]);
    const { newPlan, setNewPlan} = useContext(NewPlanContext);

    useEffect(() => {
        if (!userData) history.push('/');
        else if (userData.planId) history.push('/plan-details');
    }, [])

    function saveAndNext() {

    }

    if (!userData) return <PageStyle></PageStyle>

    return(
        <PageStyle>
            <BigText marginTop='55px'>
                <BrandName>Bom te ver por aqui, {userData.username}.</BrandName>
            </BigText>
            <SmallText>“Agradecer é arte de atrair coisas boas”</SmallText>
            <WhiteBoard>
                <CardImg src={image03} height='172px' marginBottom='30px' />
                <Select value={selectPlanId} onChange={(e) => setSelectPlanId(e.target.value)}>
                    <option value={0}>Plano</option>
                    <option value={1}>Semanal</option>
                    <option value={2}>Mensal</option>
                </Select>
                <Select value={deliveryType} onChange={(e) => setDeliveryType(e.target.value)}>
                    <option value={0}>Entrega</option>
                    <option value={1}>{selectPlanId === '1' ? 'Segunda' : 'Dia 01'}</option>
                    <option value={2}>{selectPlanId === '1' ? 'Quarta' : 'Dia 10'}</option>
                    <option value={3}>{selectPlanId === '1' ? 'Sexta' : 'Dia 20'}</option>
                </Select>
                <CheckBoxContainer>
                    <BlueText marginTop='0'>Quero receber</BlueText>
                    <Wrapper>
                        <CheckBox>
                            <input 
                                type='checkbox'
                                checked={products[0]} 
                                onChange={(e) => setProducts([!products[0], products[1], products[2]])} />
                            Chás
                        </CheckBox>
                        <CheckBox>
                            <input 
                                type='checkbox'
                                checked={products[2]} 
                                onChange={(e) => setProducts([products[0], products[1], !products[2]])} />
                            Incensos
                        </CheckBox>
                        <CheckBox>
                            <input 
                                type='checkbox'
                                checked={products[1]} 
                                onChange={(e) => setProducts([products[0], !products[1], products[2]])} />
                            Produtos organicos
                        </CheckBox>
                    </Wrapper>
                </CheckBoxContainer>   
            </WhiteBoard>
            <Button 
                width='202px' 
                height='39px' 
                font='24px' 
                marginTop='12px'
                onClick={saveAndNext}
            >
                Próximo
            </Button>
        </PageStyle>
    )
}

const CheckBoxContainer = styled.div`
    width: 290px;
    height: 111px;
    background: rgba(224, 209, 237, 0.62);
    border-radius: 5px;
    padding: 3px 12px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const CheckBox = styled.label`
    height: 25px;
    font-size: 18px;
    line-height: 21px;
    color: #4D65A8;
    display: flex;
    align-items: center;
    margin-top: 10px;
    & input{
        margin-right: 6px;
        border: none;
        width: 20px;
        height: 20px;
        background-color: #fff;        
    }
`;