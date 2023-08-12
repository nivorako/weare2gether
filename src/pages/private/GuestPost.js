import React, {useEffect} from 'react';
import { useDispatch } from "react-redux";

import styled from '@emotion/styled';

import { TextField, Button, TextareaAutosize } from '@mui/material';

import { setActivePage } from '../../features/pageSlice';

const GuestPost = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("allo !!");
    }

    const dispatch = useDispatch();

    // Mettre à jour l'état de la page active lorsque le composant est monté
    useEffect(() => {
        dispatch(setActivePage("GuestPost"));
    }, [dispatch]);
    return (
        <GuestPostContainer id='guestPost'>
            <GuestPostBox>
                <GuestPostHead>
                    Ajouter votre temoignage ici
                </GuestPostHead>
                <GuestPostBody onSubmit={handleSubmit}>
                    <StyledTextarea placeholder='toti'/>
                    <Button type="submit">Envoyer</Button>
                </GuestPostBody>
            </GuestPostBox>
        </GuestPostContainer>
    )
}

const GuestPostContainer = styled.main`
    width: 100%;
`;

const GuestPostBox = styled.div`
    width: 70%;
    margin: auto;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const GuestPostHead = styled.div`

`;

const GuestPostBody = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    
`;

const StyledTextarea = styled(TextareaAutosize)`
    placeholder: "ttoto";
    height: 20px;
    rows: 3;
`;

export default GuestPost
