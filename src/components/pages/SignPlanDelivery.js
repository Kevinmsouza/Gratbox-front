import { BigText, BrandName, CardImg, PageStyle, Select, SmallText, WhiteBoard } from "../shared/styledComponents";
import image03 from "../../assets/images/image03.jpg";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import NewPlanContext from "../../contexts/NewPlanContext";
import { useHistory } from "react-router";
import styled from "styled-components";
const states = [ 
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
    'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
    'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',
]


export default function SignPlanDelivery() {
    const {userData, setUserData} = useContext(UserContext);
    const {newPlan} = useContext(NewPlanContext);
    let history = useHistory();
    const [fullName, setFullname] = useState('');
    const [address, setAddress] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [city, setCity] = useState('');
    const [stateId, setStateId] = useState(0);

    useEffect(() => {
        if (!userData) history.push('/');
        else if (userData.planId) history.push('/plan-details');
        else if (!newPlan) history.push('/sign-plan')
    }, [])

    return(
        <PageStyle>
            <BigText marginTop='55px'>
                <BrandName>Bom te ver por aqui, {userData.username}.</BrandName>
            </BigText>
            <SmallText>“Agradecer é arte de atrair coisas boas”</SmallText>
            <WhiteBoard>
                <CardImg src={image03} height='172px' marginBottom='30px' />
                <FormWrapper>
                    <Input 
                        type='text'
                        placeholder="Nome completo" 
                        value={fullName}
                        onChange={(e) => setFullname(e.target.value)}
                    />
                    <Input 
                        type='text'
                        placeholder="Endereço de entrega" 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <Input 
                        type='text'
                        placeholder="CEP" 
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                    />
                    <Wrapper>
                        <Input 
                            type='text'
                            placeholder="Cidade" 
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            width='168px'
                        />
                        <Select value={stateId} onChange={(e) => setStateId(e.target.value)} width='108px'>
                            <option value={0}>Estado</option>
                            {states.map((uf, i) => <option value={i + 1}>{uf}</option>)}
                        </Select>
                    </Wrapper>
                </FormWrapper>
            </WhiteBoard>
        </PageStyle>
    )
}

const FormWrapper = styled.form`
    max-width: 290px;
`;

const Input = styled.input`
    max-width: ${props => props.width || "290px"};
    width: 100%;
    height: 44px;
    background: rgba(224, 209, 237, 0.62);
    border-radius: 5px;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    padding-left: 12px;
    border: none;
    font-family: Roboto;
    color: #4D65A8;
    margin-bottom: 7px;
    &::placeholder{
        color: #4D65A8; 
    }
    &:focus{
        outline: none;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;