import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import styled from "@emotion/styled";
import { Paper } from "@mui/material"

import { setActivePage } from "../features/pageSlice";

const Connexion = () => {
    const dispatch = useDispatch();

    // Mettre à jour l'état de la page active lorsque le composant est monté
    useEffect(() => {
        dispatch(setActivePage("Connexion"));
    }, [dispatch]);

    return (
        <ConnexContainer>
            <ConnexBox>
                ole ole
            </ConnexBox>
        </ConnexContainer>
    );
};

const ConnexContainer = styled.main`
    position: relative;
    width: 100%;
    height: 50vh;
    background-color: var(--secondary);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ConnexBox = styled(Paper)`
    position: absolute;
    bottom: 100px;
    width: 50%;
    height: 400px;
    background-color: var(--primary);
    elevation: 16;
`;

export default Connexion;
