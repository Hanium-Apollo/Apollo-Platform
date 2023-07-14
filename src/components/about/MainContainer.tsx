import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';

const MainContainer = styled(Grid)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px 0;
    background-color: #333333;
    flex-direction: column;
    max-width: 1280px;
    margin: 0 auto;
    @media (max-width: 768px) {
        padding: 100px 30px;
    }
    overflow : auto;
`;

export default MainContainer;
