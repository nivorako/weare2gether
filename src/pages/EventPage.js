import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Box } from "@mui/material";

import koezio from "../assets/koezio.jpg";

import { setActivePage } from '../features/pageSlice';

import styled from '@emotion/styled';

const EventPage = () => {
    const dispatch = useDispatch();
    // Mettre à jour l'état de la page active lorsque le composant est monté
    useEffect(() => {
        dispatch(setActivePage("EventPage"));
    }, [dispatch]);
    return (
        <EventContainer>
            <Box
                sx={{
                    
                    margin: "5rem",
                }}
            >
                <img src={koezio} alt="ambiance koezio" width="100%"/>
            </Box>
        </EventContainer>
    )
};

const EventContainer = styled.main`
    width: 100%;
    min-height: 100vh;
`;

export default EventPage
