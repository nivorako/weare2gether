import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";

import styled from '@emotion/styled';

import { TextField, Button, TextareaAutosize } from '@mui/material';

import { setActivePage } from '../../features/pageSlice';

import Parse from "../../utils/parseConfig";

const GuestPost = () => {

    const initialFormState = {
       msg: ""
    };

    const currentUserId = useSelector(state => state.auth.currentUser.id);
    console.log("id :", currentUserId);

    const [formData, setFormData] = useState(initialFormState);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const data = new FormData(e.currentTarget)
        const msg = data.get("msg");
        console.log("msg !!", msg);

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
                    <StyledTextarea 
                        placeholder='toti'
                        required
                        
                        id="msg"
                        //label="email"
                        name="msg"
                        autoComplete="msg"
                        value={formData.msg}
                        onChange={(e) =>
                            setFormData({ ...formData, msg: e.target.value })
                        }
                        inputprops={{
                            "data-testid": "msg-input" // Ajoutez un attribut data-testid
                        }}
                    />
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
