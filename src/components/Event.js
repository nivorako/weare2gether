import React from "react";
import { useNavigate } from "react-router-dom";

import { Button, Paper } from "@mui/material";
import styled from "@emotion/styled";
import EventImg from "../assets/salsaGuinguette 1.png";
import koezio from "../assets/koezio.jpg";
/**
 * Représente un évènement
 * @returns {JSX element}
 */
const Event = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/EventPage");
    }
    return (
        <EventContainer
            onClick={handleNavigate}
        >
            <EventElt>
                <img src={koezio} alt="" width="100%" height="100%"></img>
            </EventElt>
            <EventElt>
                <EventDate>Vendredi 12 juillet 2023</EventDate>
                <EventTitle>KOEZIO</EventTitle>
                <EventTitle>Latino / SBK party</EventTitle>
                <EventAdress>
                    
                    <p>11 avenue de la plaine des sports 95800 CERGY</p>
                </EventAdress>
            </EventElt>
        </EventContainer>
    );
};

const EventContainer = styled(Paper)`

    elevation: 32;
    witdh: 100%;
    display: flex;
    justify-content: space-between;
    background-color: white;
    transition: .5s;
    @media (max-width: 764px) {
        flex-direction: column;
        align-items: center;
    }
    &:hover {
        cursor: pointer;
        transform: scale(1.01);
    }
`;

const EventElt = styled.div`
    width: 50%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 764px) {
        width: 100%;
    }
`;

const EventDate = styled.span`
    font-size: 32px;
`;

const EventTitle = styled.h2``;

const EventAdress = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const EventBtn = styled(Button)`
    width: 50%;
    background-color: var(--black);
    color: white;
    &:hover {
        background-color: var(--primary);
    }
`;

export default Event;
