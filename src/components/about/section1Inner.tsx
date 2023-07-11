import styled from "@emotion/styled";
import { Grid, Button as MaterialButton } from "@mui/material";
import { jsx, css } from '@emotion/react';
import { useNavigate } from "react-router-dom";

interface Section1Props {
    children: React.ReactNode;
}

const buttonStyles = css`
    background-color: gray;
    padding: 10px 20px;
    color : white;
    font-weight: bold; 
    font-size: 1.5rem;  
    border: none;
    weight : 50vw;
    height : 10vh;
    display: flex;
    position: relative;
    padding: 20px 20px;
    margin: 30px 0px;

    @font-face {
        font-family: 'AppleBold';
        src: url('/fonts/AppleSDGothicNeoBold.ttf') format('truetype');
    }
    font-family: 'AppleBold';
`
const StyledButton = styled(MaterialButton)`
    ${buttonStyles}
`
const SectionContainer = styled(Grid)`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const TextContainer = styled(Grid)`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px 20px;
`

export const Section1Inner: React.FC<Section1Props> = ({children}) => {
    const navigate = useNavigate();
    return(
    <SectionContainer container>
        <TextContainer item xs={12}>
            <StyledButton onClick={()=>navigate("/")}>
                {"Get Started 👌🏼"}
            </StyledButton>
            <StyledButton variant="text">
                {"How to use? 🤔"}
            </StyledButton>
            <StyledButton>
                {"If No Dockerfile 🐳"}
            </StyledButton>
        </TextContainer>
    </SectionContainer>
    );
};