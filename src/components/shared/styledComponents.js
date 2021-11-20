import styled from "styled-components";

const PageStyle = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BigText = styled.p`
    margin-top: ${ props => props.marginTop || "101px" };
    font-size: 28px;
    font-weight: 500;
    text-align: center;
`;

const BrandName = styled.span`
    font-weight: 700;
`;

const SmallText = styled.p`
    margin-top: 45px;
    font-size: 18px;
    font-weight: 300;
    text-align: center;
    max-width: 341px;
`;

const Button = styled.button`
    width: ${props => props.width || "202px"};
    height: ${props => props.height || "45px"};
    background: #8C97EA;
    font-size: ${props => props.font || "18px"};
    font-weight: 700;
    border: none;
    border-radius: 10px;
    color: #fff;
`;

const TextButton = styled.p`
    margin-top: 20px;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
`;

const FrontPageForm = styled.form`
    margin-top: 43px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FrontPageInput = styled.input`
    width: 325px;
    height: 64px;
    border: 1px solid #604848;
    border-radius: 10px;
`;


export { 
    PageStyle,
    BigText,
    BrandName,
    SmallText,
    Button,
    TextButton,
    FrontPageForm,
    FrontPageInput,
};
