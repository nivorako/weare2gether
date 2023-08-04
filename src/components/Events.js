import React from "react";
import { Link } from "react-router-dom";
import Event from "./Event";
import styled from "@emotion/styled";
import { Button, Box } from "@mui/material";
import ImgTitle from "../assets/imgTitle.png";

const Events = () => {
    return (
        <EventContainer>
            <EventBox>
                <EventTitle>
                    <img
                        src={ImgTitle}
                        alt="titre"
                        style={{
                            width: "100%",
                            height: "80vh",
                            objectFit: "cover",
                            borderRadius: "0",
                        }}
                    />
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
                            <Desc>c'est plus que de la musique</Desc>
                        </Box>
                        <Link to="/Caroussel" sx={{ textDecoration: "none" }}>
                            <Btn>Photos / Videos</Btn>
                        </Link>
                    </Box>
                </EventTitle>
                <EventsAd>Les soirées à venir</EventsAd>
                <EventItems>
                    <Box>
                        <Event />
                    </Box>
                    <Box>
                        <Event />
                    </Box>
                    <Box>
                        <Event />
                    </Box>
                </EventItems>
            </EventBox>
        </EventContainer>
    );
};

const EventContainer = styled.div`
    position: relative;
    width: 100%;
    background-color: var(--secondary);
    padding-bottom: 5rem;
`;

const EventBox = styled.div`
    width: 70%;
    margin: 0px auto 0 auto;
    border-radius: 1rem 1rem 0 0;
    background-color: var(--secondary);
    z-index: 10;
    @media (max-width: 764px) {
        width: 100%;
    }
`;

const EventTitle = styled.div`
    position: relative;
    width: 100%;
`;

const EventItems = styled.section`
    width: 100%;
    max-height: 100vh;
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
`;

const Btn = styled(Button)({
    color: "white",
    backgroundColor: "var(--secondary)",
    opacity: ".8",
    "&:hover": {
        backgroundColor: "var(--secondary)",
        opacity: "1",
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