import React from "react";
import { Link } from "react-router-dom";
import Event from "./Event";
import styled from "@emotion/styled";
import { Button, Box } from "@mui/material";
import ImgTitle from "../assets/imgTitle.png";
import disco from "../assets/disco.mp4"
const Events = () => {
    
    return (
        <EventsContainer id="events">
            <EventsBox>
                <EventsTitle id="eventsTitle">
                   
                    <video
                        style={{
                            width: "100%",
                            height: "80vh",
                            objectFit: "cover",
                            borderRadius: "0",
                        }}
                        autoPlay
                        loop
                        muted
                    >
                        <source src={disco} type="video/mp4" />
                        Votre navigateur ne prend pas en charge la lecture de vidéos.
                    </video>
                    <Box
                        sx={{
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                            textAlign: "center",
                        }}
                    >
                        <Box>
                            <Title>Weare2gether,</Title>
                            <Desc>C'est plus que de la musique</Desc>
                        </Box>
                       
                    </Box>
                </EventsTitle>
                <EventsAd>Les soirées à venir :</EventsAd>
                <EventsItems>
                    <Box>
                        <Event />
                    </Box>
                    <Box>
                        <Event />
                    </Box>
                    <Box>
                        <Event />
                    </Box>
                </EventsItems>
            </EventsBox>
        </EventsContainer>
    );
};

const EventsContainer = styled.div`
    width: 100%;
    background-color: var(--secondary);
    padding-bottom: 8rem;
`;

const EventsBox = styled.div`
    width: 70%;
    margin: -460px auto 0 auto;
    border-radius: 1rem 1rem 0 0;
    background-color: var(--secondary);
    z-index: 10;
    @media (max-width: 764px) {
        width: 90%;
    }
`;

const EventsTitle = styled.div`
    position: relative;
    width: 100%;
`;

const EventsItems = styled.section`
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    & > * {
        margin-bottom: 2rem;
        &:last-child {
            margin-bottom: 0; /* Supprimer la marge inférieure pour le dernier élément */
        }
    }
`;

const EventsAd = styled.h2`
    text-align: center;
    font-family: Lora;
    font-size: 32px;
    color: white;
    margin: 8rem 0 8rem 0;
`;

const Btn = styled(Button)({
    color: "white",
    backgroundColor: "var(--primary)",
    opacity: ".8",
    transition: ".5s",
    "&:hover": {
        backgroundColor: "var(--primary)",
        opacity: "1",
        transform: "scale(1.1)",
        borderBottom: "white 3px solid",
    },
});

const Title = styled.h1`
    color: white;
    width: 100%;
    font-size: 48px;
    font-weight: bold;
    font-family: Lora;
    @media (max-width: 450px) {
        margin: 0 1rem 0 1rem;
    }
`;

const Desc = styled.h1`
    color: white;
    width: 100%;
    font-size: 32px;
    font-weight: bold;
    font-family: Lora;
    @media (max-width: 450px) {
        margin: 0 1rem 0 1rem;
    }
`;

export default Events;
