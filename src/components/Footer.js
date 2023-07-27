import React from "react";
import styled from "@emotion/styled";
import { CssBaseline, Typography } from "@mui/material";

const Footer = () => {
    return (
        <>
            <CssBaseline />
            <FooterBox>
                <Typography sx={{color:"white", fontSize:"10px"}}>copyright 2022 - WEARE 2GETHER . Tout droit réservé </Typography>
                <Typography sx={{color:"white", fontSize:"10px"}}>Mentions légales | Politique de confidentialité</Typography>
            </FooterBox>
        </>
        
    )
};

const FooterBox = styled.div`
    
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width:100%;
    min-height:100px;
    background-color: var(--black);
`;

export default Footer;
