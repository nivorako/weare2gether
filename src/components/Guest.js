import React from 'react';

import styled from '@emotion/styled';

import {Paper} from '@mui/material';

const Guest = () => {
    return (
        <GuestContainer>
            <GuestBox>
                <GuestHead>
                    <GuestTitle>
                        Laisser votre témoignages par ici :
                    </GuestTitle>
                    <GuestNotif>
                        (3) Messages
                    </GuestNotif>
                </GuestHead>
                <GuestItems>
                    <GuestItem>
                        Guest item heheh
                    </GuestItem>
                    <GuestItem>
                        Guest item heheh
                    </GuestItem>
                    <GuestItem>
                        Guest item heheh
                    </GuestItem>
                </GuestItems>
            </GuestBox>
        </GuestContainer>
    )
};

const GuestContainer = styled.article`
    width: 100%;
    background-color: var(--secondary);
    padding-bottom: 2rem;
`;

const GuestBox = styled.div`
    width: 70%;
    height: auto;
    margin: 0 auto;
`;

const GuestHead = styled.div`
    width: 100%;
    padding: 1rem;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const GuestTitle = styled.h2`
    
`;

const GuestNotif = styled.span`
    
`;

const GuestItems = styled.div`
    background-color: white;
`;

const GuestItem = styled(Paper)`

`;

export default Guest
