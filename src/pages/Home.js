import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setActivePage } from "../features/pageSlice";

import styled from "@emotion/styled";

import Events from "../components/Events";
import About from "../components/About";
import Guest from "../components/Guest";

const Home = () => {
    const dispatch = useDispatch();
    const selectedCard = useSelector((state) => state.blogCard.selectedCard);
    console.log("selected card", selectedCard);

    // Mettre à jour l'état de la page active lorsque le composant est monté
    useEffect(() => {
        dispatch(setActivePage("Home"));
    }, [dispatch]);
    
    return (
        <>
            <HomeContainer id="home">
                <Events />
                <About />
                <Guest />
            </HomeContainer>
        </>
    );
};

const HomeContainer = styled.main`
    width: 100%;
`;

export default Home;
