import React from "react";

import { Button, Paper } from "@mui/material";
import styled from "@emotion/styled";
import EventImg from "../assets/salsaGuinguette 1.png";

/**
 * Représente un évènement
 * @returns {JSX element}
 */
const Event = () => {
    return (
        <EventContainer>
            <EventElt>
                <img src={EventImg} alt="" width="100%" height="100%"></img>
            </EventElt>
            <EventElt>
                <EventDate>Vendredi 12 juillet 2023</EventDate>
                <EventTitle>Le titre de l event</EventTitle>
                <EventAdress>
                    <h3>Hotel de Police</h3>
                    <p>1, place de la Gare, 95000 Cergy</p>
                </EventAdress>
                <EventBtn>Participer</EventBtn>
            </EventElt>
        </EventContainer>
    );
};

const EventContainer = styled(Paper)`
    elevation: 16;
    witdh: 100%;
    display: flex;
    justify-content: space-between;
    background-color: white;
    @media (max-width: 764px) {
        flex-direction: column;
        align-items: center;
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
        background-color: var(--secondary);
    }
`;

export default Event;
