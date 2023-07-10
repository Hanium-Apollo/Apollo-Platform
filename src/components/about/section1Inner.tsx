import styled from "@emotion/styled";
import { Button as MaterialButton } from "@mui/material";
import { jsx, css } from '@emotion/react';

interface Section1Props {
    children: React.ReactNode;
}

export const Section1Button: React.FC<Section1Props> = ({children}) => {
    return(
        <MaterialButton variant="outlined">
            {children}
        </MaterialButton>
    );
};