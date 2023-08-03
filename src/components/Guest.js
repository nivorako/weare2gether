import React from 'react';

import styled from '@emotion/styled';

import {Paper, Avatar} from '@mui/material';

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
                        <Avatar />
                        <GuestMsg>
                            <GuestMsgTitle>
                                Nom de l'auteur
                            </GuestMsgTitle>
                            <GuestMsgBody>
                                Nous avons apprécié la soirée
                            </GuestMsgBody>
                            <GuestMsgNotif>
                                Icones
                            </GuestMsgNotif>
                        </GuestMsg>
                    </GuestItem>
                    <GuestItem>
                        <Avatar />
                        <GuestMsg>
                            <GuestMsgTitle>
                                Nom de l'auteur
                            </GuestMsgTitle>
                            <GuestMsgBody>
                                Nous avons apprécié la soirée
                            </GuestMsgBody>
                            <GuestMsgNotif>
                                Icones
                            </GuestMsgNotif>
                        </GuestMsg>
                    </GuestItem>
                    <GuestItem>
                        <Avatar />
                        <GuestMsg>
                            <GuestMsgTitle>
                                Nom de l'auteur
                            </GuestMsgTitle>
                            <GuestMsgBody>
                                Nous avons apprécié la soirée
                            </GuestMsgBody>
                            <GuestMsgNotif>
                                Icones
                            </GuestMsgNotif>
                        </GuestMsg>
                    </GuestItem>
                    <GuestItem>
                        <Avatar />
                        <GuestMsg>
                            <GuestMsgTitle>
                                Nom de l'auteur
                            </GuestMsgTitle>
                            <GuestMsgBody>
                                Nous avons apprécié la soirée
                            </GuestMsgBody>
                            <GuestMsgNotif>
                                Icones
                            </GuestMsgNotif>
                        </GuestMsg>
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
    width: 100%;
    max-height: 100vh;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--secondary);
    & > * {
        margin-bottom: 1rem;
        &:last-child{
            margin-bottom: 0;
        }
    }
`;

const GuestItem = styled(Paper)`
    width: 100%;
    background-color: white;
    display: flex;
    padding: 1rem;
`;

const GuestMsg = styled.div`
    width: 100%;
    margin: 1rem 2rem;
`;

const GuestMsgTitle = styled.div`
    width: 100%;
    padding: .5rem;
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
    padding: 1rem;
    color: var(--black);
`;

export default Guest
