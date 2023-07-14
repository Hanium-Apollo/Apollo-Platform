import React from 'react';
import { Grid } from '@mui/material';
import styled from '@emotion/styled';

const SectionContainer = styled(Grid)`
    display: flex;
    position: relative;
    background-color: #5A5A5A;
    border-radius: 20px;
    width: 85vw;
    z-index: 1;
    padding: 50px 0 30px 0;
    transform: translateY(-5%);
    
    
`

interface Section2Props {
    children: React.ReactNode;
}

export const Section2: React.FC<Section2Props> = ({ children }) => { 
    return (
    <SectionContainer container xs>
        <Grid item xs={6}>
            {"How to use?"}
        </Grid>
        <Grid item xs={6}>
            {"Hello"}
        </Grid>
    </SectionContainer>
    );
};