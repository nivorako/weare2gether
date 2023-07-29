import React from 'react';

import { Box } from '@mui/material';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import EventImg from "../assets/salsaGuinguette 1.png";

/**
 * Représente un évènement
 * @returns {JSX element}  
 */
const Event = () => {
    return (
        <EventContainer>
            <Typography
                fontSize="48px"
            >
                10 juillet 2023
            </Typography>
                
           
            <Box>
                <img src={EventImg} alt="" width="100%"></img>
            </Box>
            <Box>Description</Box>
        </EventContainer>
    )
};

const EventContainer = styled.div`
    witdh:100%;
    
    display:flex;
    justify-content: space-between;
    padding: .5rem;
    background-color: white;
    margin-bottom: 2rem;
`;

// const EventElt = styled.

export default Event
