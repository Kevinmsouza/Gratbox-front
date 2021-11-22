import { 
    BigText, BrandName, 
    Button, CardImg, 
    PageStyle, Select, 
    SmallText, WhiteBoard 
} from "../shared/styledComponents";
import image03 from "../../assets/images/image03.jpg";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import NewPlanContext from "../../contexts/NewPlanContext";
import { useHistory } from "react-router";
import styled from "styled-components";
import { postPlan } from "../../services/gratibox";
import { sendAlert } from "../shared/alerts";
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
    const [stateId, setStateId] = useState('0');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!userData) history.push('/');
        else if (userData.planId) history.push('/plan-details');
        else if (!newPlan) history.push('/sign-plan');
    }, [])

    function signNewPlan(e) {
        e.preventDefault();
        if (stateId === '0') return;
        setIsLoading(true);
        const body = {
            ...newPlan,
            fullName,
            address,
            postalCode,
            city,
            stateId,
        }
        postPlan(body, userData.token)
            .then(res => {
                setUserData({...userData, planId: body.planId});
                history.push('/plan-details');
            })
            .catch(err => {
                sendAlert({
                    type: 'error',
                    title: 'Algo deu errado',
                    text: `Verifique todos os campos e tente novamente. 
                        Se o erro persistir tente atualizar a pagina`
                })
                setIsLoading(false);
            })
    }

    function postalMasker(e) {
        if(e.target.value.length === 5) {
            if (!postalCode.includes('-')) {
                return setPostalCode(e.target.value + '-');
            }
            else {
                return setPostalCode(e.target.value.replace('-',''));
            }
        } 
        if(e.target.value.length > 9) return;
        setPostalCode(e.target.value);
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
                <FormWrapper>
                    <Input 
                        disabled={isLoading}
                        required
                        type='text'
                        placeholder="Nome completo" 
                        value={fullName}
                        onChange={(e) => setFullname(e.target.value)}
                    />
                    <Input 
                        disabled={isLoading}
                        required
                        type='text'
                        placeholder="Endereço de entrega" 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <Input 
                        disabled={isLoading}
                        required
                        type='text'
                        placeholder="CEP" 
                        pattern='[0-9]{5}-[0-9]{3}'
                        title='Ex: 12345-123'
                        value={postalCode}
                        onChange={postalMasker}
                    />
                    <Wrapper>
                        <Input 
                            disabled={isLoading}
                            required
                            type='text'
                            placeholder="Cidade" 
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            width='168px'
                        />
                        <Select
                            value={stateId}
                            onChange={(e) => setStateId(e.target.value)} 
                            width='108px'
                            disabled={isLoading}
                        >
                            <option value={0}>Estado</option>
                            {states.map((uf, i) => <option value={i + 1}>{uf}</option>)}
                        </Select>
                    </Wrapper>
                </FormWrapper>
            </WhiteBoard>
            <Button 
                type='submit'
                width='202px' 
                height='39px' 
                font='24px' 
                marginTop='12px'
                onClick={signNewPlan}
            >
                Finalizar
            </Button>
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
    justify-content: space-between;
    gap: 5px;
`;