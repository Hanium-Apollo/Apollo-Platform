import React from 'react';
import { Grid } from '@mui/material';
import styled from '@emotion/styled';


const SectionContainer = styled(Grid)`
    display: flex;
    position: relative;
    height: 80vh;
    weight: 70vw;
    background-color: #5A5A5A;
    opacity: 1;
    border-radius: 20px;
    z-index: 1;
    margin: 60px 70px 60px 70px;
    transform: translateY(-5%);
    flex-direction: column;
`

interface Section2Props {
    children: React.ReactNode;
}


export const Section2: React.FC<Section2Props> = ({ children }) => { 
    return (
    <SectionContainer container xs>
        <Grid item xs={12}>
            {"Hello"}
        </Grid>
    </SectionContainer>
    );
};