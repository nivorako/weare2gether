import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { setActivePage } from "../features/pageSlice";

import photos from "../data/dataPhoto.json";

const Caroussel = () => {
    const dispatch = useDispatch();

    const images = photos[0].cover;
    console.log("images.length :", images)
    // Mettre à jour l'état de la page active lorsque le composant est monté
    useEffect(() => {
        dispatch(setActivePage("Caroussel"));
    }, [dispatch]);

    return (
        <CarousselContainer>
            <CarousselBox>
                
            </CarousselBox>
        </CarousselContainer>
    );
};

const CarousselContainer = styled.main`
    width: 100%;
    height: 100vh;
`;

const CarousselBox = styled.article`

`;

export default Caroussel;
