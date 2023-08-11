import React from "react";
import { Link } from "react-router-dom";

import styled from "@emotion/styled";

import { Paper, Avatar, Button } from "@mui/material";

const Guest = () => {
    return (
        <GuestContainer id="guest">
            <GuestBox>
                <GuestHead>
                    <GuestTitle>Laisser votre témoignages par ici :</GuestTitle>
                    <GuestNotif>(3) Messages</GuestNotif>
                </GuestHead>
                <GuestItems>
                    <GuestItem>
                        <Avatar />
                        <GuestMsg>
                            <GuestMsgTitle>Nom de l'auteur</GuestMsgTitle>
                            <GuestMsgBody>
                                Nous avons apprécié la soirée
                            </GuestMsgBody>
                            <GuestMsgNotif>Icones</GuestMsgNotif>
                        </GuestMsg>
                    </GuestItem>
                    <GuestItem>
                        <Avatar />
                        <GuestMsg>
                            <GuestMsgTitle>Nom de l'auteur</GuestMsgTitle>
                            <GuestMsgBody>
                                Nous avons apprécié la soirée
                            </GuestMsgBody>
                            <GuestMsgNotif>Icones</GuestMsgNotif>
                        </GuestMsg>
                    </GuestItem>
                    <GuestItem>
                        <Avatar />
                        <GuestMsg>
                            <GuestMsgTitle>Nom de l'auteur</GuestMsgTitle>
                            <GuestMsgBody>
                                Nous avons apprécié la soirée
                            </GuestMsgBody>
                            <GuestMsgNotif>Icones</GuestMsgNotif>
                        </GuestMsg>
                    </GuestItem>
                    <GuestItem>
                        <Avatar />
                        <GuestMsg>
                            <GuestMsgTitle>Nom de l'auteur</GuestMsgTitle>
                            <GuestMsgBody>
                                Nous avons apprécié la soirée
                            </GuestMsgBody>
                            <GuestMsgNotif>Icones</GuestMsgNotif>
                        </GuestMsg>
                    </GuestItem>
                </GuestItems>
                <GuestSubmit>
                    <Link to="/private/GuestPost" >
                        <GuestBtn>Laissez votre temoignage</GuestBtn>
                    </Link>
                </GuestSubmit>
            </GuestBox>
        </GuestContainer>
    );
};

const GuestContainer = styled.article`
    width: 100%;
    height: 140vh;
    background-color: var(--secondary);
`;

const GuestBox = styled.div`
    width: 70%;
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 764px){
        width: 90%;
    }
`;

const GuestHead = styled.div`
    width: 100%;
    padding: 1rem;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 764px){
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
    @media (max-width: 764px){
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
    margin-top: 4rem;
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
    color: white;
    font-size: 40px;
`;

export default Guest;
