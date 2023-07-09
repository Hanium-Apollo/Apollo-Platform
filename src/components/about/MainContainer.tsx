import React from 'react';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';

const MainContainer = styled(Grid)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0 auto;
    padding: 100px 0;
    background-color: #333333;
    @media (max-width: 768px) {
        padding: 100px 30px;
    }
`;

export default MainContainer;
