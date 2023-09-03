import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import styled from "@emotion/styled";

import { Paper, Avatar, Button, Typography } from "@mui/material";

// import Parse from "../utils/parseConfig";

import Parse from "parse/dist/parse.min.js";

const APPLICATION_ID = "GXgBEka1jlGx1EbzJcgbtOuv1FP9CnH5GO4ZpYMV";
const HOST_URL = "https://parseapi.back4app.com/";
const JAVASCRIPT_KEY = "3it9PTiIq5GZtqnBkkn8VFJAeJZeOjFditnE6DQM";

Parse.initialize(APPLICATION_ID, JAVASCRIPT_KEY);
Parse.serverURL = HOST_URL;

const Guest = () => {
    const [guestMsg, setGuestMsg] = useState([]);

    useEffect(() => {
        const guestQuery = new Parse.Query("GuestPost");

        guestQuery
            .find()
            .then((res) => {
                setGuestMsg(res);
            })
            .catch((error) => {
                console.log("error :", error);
            });
    }, []);

    const currentUser = Parse.User.current();

    console.log("currentUser :", currentUser);

    return (
        <GuestContainer id="guest">
            <GuestBox>
                <GuestHead>
                    <GuestTitle>Vos témoignages :</GuestTitle>
                    <GuestNotif>({guestMsg.length}) Messages</GuestNotif>
                </GuestHead>
                <GuestItems>
                    {guestMsg.map((msg, index) => {
                        return (
                            <GuestItem key={index}>
                                <Avatar />
                                <GuestMsg>
                                    <GuestMsgTitle>
                                        <Typography>
                                            Nom de l'auteur:{" "}
                                            {msg.get("senderUsername")}
                                        </Typography>
                                        <Typography>
                                            {new Date(
                                                msg.get("createdAt"),
                                            ).toLocaleDateString()}
                                        </Typography>
                                    </GuestMsgTitle>
                                    <GuestMsgBody>
                                        {msg.get("guest")}
                                    </GuestMsgBody>
                                    <GuestMsgNotif>Icones</GuestMsgNotif>
                                </GuestMsg>
                            </GuestItem>
                        );
                    })}
                </GuestItems>
                <GuestSubmit>
                <Link to="/GuestPost">
                            <GuestBtn>
                                <Typography
                                    component="p"
                                    sx={{
                                        color: "white",
                                        fontSize: "30px",
                                        fontFamily: "Lora",
                                    }}
                                >
                                    Laissez votre temoignage
                                </Typography>
                                <Typography
                                    component="p"
                                    variant="p"
                                    sx={{
                                        color: "white",
                                        fontSize: "16px",
                                    }}
                                >
                                    Ici
                                </Typography>
                            </GuestBtn>
                        </Link>
                </GuestSubmit>
                <GuestSubmit>
                    <Typography
                        component="p"
                        variant="p"
                        textAlign="center"
                        sx={{
                            color: "white",
                            fontSize: "16px",
                        }}
                    >
                        Besoins d'informations supplémentaires ??
                    </Typography>
                    <Typography
                        component="p"
                        textAlign="center"
                        sx={{
                            color: "white",
                            fontSize: "30px",
                            fontFamily: "Lora",
                            // '@media(max-width: 600px)':{
                            //     fontSize:"16px"
                            // }
                        }}
                    >
                        CONTACTEZ - NOUS
                    </Typography>
                </GuestSubmit>
            </GuestBox>
        </GuestContainer>
    );
};

const GuestContainer = styled.article`
    width: 100%;
    height: 250vh;
    background-color: var(--secondary);
`;

const GuestBox = styled.div`
    width: 70%;
    height: auto;
    margin: 0 auto;
    padding-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 764px) {
        width: 90%;
    }
    @media (max-width: 600px) {
        margin-bottom: 8rem;
    }
`;

const GuestHead = styled.div`
    width: 100%;
    padding: 1rem;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 764px) {
        flex-direction: column;
    }
`;

const GuestTitle = styled.h2``;

const GuestNotif = styled.span``;

const GuestItems = styled.div`
    width: 100%;
    max-height: 100vh;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--secondary);
    & > * {
        margin-bottom: 1rem;
        &:last-child {
            margin-bottom: 0;
        }
    }
`;

const GuestItem = styled(Paper)`
    width: 100%;
    background-color: white;
    display: flex;
    padding: 1rem;
    @media (max-width: 764px) {
        flex-direction: column;
    }
`;

const GuestMsg = styled.div`
    width: 90%;
    margin: 1rem 2rem;
`;

const GuestMsgTitle = styled.div`
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    color: var(--black);
    display: flex;
    justify-content: space-between;
`;

const GuestMsgBody = styled.div`
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    background-color: #f9f9f9;
    color: var(--black);
`;

const GuestMsgNotif = styled.div`
    width: 100%;
    padding: 2rem 1rem 1rem 1rem;
    color: var(--black);
`;

const GuestSubmit = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 16rem 0 4rem 0;
    opacity: 0.8;

    &::after {
        content: "";
        position: absolute;
        bottom: -3px; /* la hauteur du soulignement */
        left: 0;
        width: 100%;
        height: 2px; /* épaisseur du soulignement */
        background-color: white; /* couleur soulignement */
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
    }
    &:hover::after {
        opacity: 1;
    }
    &:hover {
        opacity: 1;
    }
`;

const GuestBtn = styled(Button)`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export default Guest;
