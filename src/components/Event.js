import React from 'react';

// import { Box } from '@mui/material';
import styled from '@emotion/styled';

/**
 * Représente un évènement
 * @returns {JSX element}  
 */
const Event = () => {
    return (
        <EventContainer>
            Ici la section event
        </EventContainer>
    )
};

const EventContainer = styled.div`
    witdh:100%;
    height:100%;
    background-color: white;
    
`;

export default Event
