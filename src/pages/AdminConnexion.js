import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setActivePage } from "../features/pageSlice";
import { setLoading, setCurrentAdmin } from '../features/adminSlice';

import styled from '@emotion/styled';
import {
    Paper, 
    TextField,
    Typography,
    Grid,
    Button
} from "@mui/material";

// import Parse from "../utils/parseConfig";

import Parse from "parse/dist/parse.min.js";

const APPLICATION_ID = "GXgBEka1jlGx1EbzJcgbtOuv1FP9CnH5GO4ZpYMV";
const HOST_URL = "https://parseapi.back4app.com/";
const JAVASCRIPT_KEY = "3it9PTiIq5GZtqnBkkn8VFJAeJZeOjFditnE6DQM";

Parse.initialize(APPLICATION_ID, JAVASCRIPT_KEY);
Parse.serverURL = HOST_URL;

const AdminConnexion = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(setActivePage("adminConnexion"));
    })

    const initialFormState = {
        username: "",
        email: "",
        password: "",
    };

    const [formData, setFormData] = useState(initialFormState);
   
    const handleSubmit = async(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget); 
        const username = data.get("username");
        const email = data.get("email");
        const password = data.get("password");

        try {           
            const loggedUser = await Parse.User.logIn(username, password);
            const currentUser = Parse.User.current();
            dispatch(setLoading(true));
            if( loggedUser === currentUser){
                dispatch(setLoading(false));
                setFormData(initialFormState);
                alert("féclicitation vous êtes connecté !!");
                dispatch(setCurrentAdmin({username: username, id: currentUser.id}));
                navigate("/");
            }
        } catch (error) {
            console.error("error :", error);
        }
    };

    return (
        <ConnexAdminContainer id="adminConnexion">
        <ConnexAdminBox>
            <ConnexAdminHead>
                <Typography
                    component="h2"
                    variant="h5"
                >
                    Connectez - vous
                </Typography>
            </ConnexAdminHead>
            <ConnexAdminBody 
                onSubmit={handleSubmit}
            >
                <Grid container>
                    <Grid item xs={12} sm={12}>
                        <Label>Identifiant *</Label>
                        <CustomTextField
                            required
                            fullWidth
                            id="username"
                            //label="username"
                            name="username"
                            autoComplete="username"
                            value={formData.username}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    username: e.target.value,
                                })
                            }
                            inputprops={{
                                "data-testid": "username-input", // Ajoutez un attribut data-testid
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Label>Email *</Label>
                        <CustomTextField
                            required
                            fullWidth
                            id="email"
                            //label="email"
                            name="email"
                            autoComplete="email"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    email: e.target.value,
                                })
                            }
                            inputprops={{
                                "data-testid": "email-input", // Ajoutez un attribut data-testid
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Label>Mot de passe *</Label>
                        <CustomTextField
                            required
                            fullWidth
                            id="password"
                            //label="email"
                            name="password"
                            autoComplete="password"
                            value={formData.password}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    password: e.target.value,
                                })
                            }
                            inputprops={{
                                "data-testid": "password-input", // Ajoutez un attribut data-testid
                            }}
                        />
                    </Grid>
                </Grid>
                <ConnexAdminElt>
                    <Button
                        type="sumbit"
                        sx={{
                            color: "white",
                            opacity: ".6",
                            "&:hover": {
                                opacity: "1",
                                boxShadow: ".1px 1px white",
                            },
                        }}
                    >
                        Envoyez
                    </Button>
                </ConnexAdminElt>
                <ConnexAdminElt>
                    <Button
                        sx={{
                            color: "white",
                            opacity: ".6",

                            "&:hover": {
                                opacity: "1",
                                boxShadow: ".1px 1px white",
                            },
                        }}
                    >
                        Mot de passe oublié ??
                    </Button>
                </ConnexAdminElt>
            </ConnexAdminBody>
        </ConnexAdminBox>
        </ConnexAdminContainer>
    )
}

const ConnexAdminContainer = styled.main`
    position: relative;
    width: 100%;
    height: 50vh;
    background-color: var(--secondary);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ConnexAdminBox = styled(Paper)`
    position: absolute;
    bottom: 50px;
    width: 50%;
    height: 600px;
    color: white;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background-color: var(--primary);
    elevation: 16;
    @media (max-width: 1024px) {
        width: 70%;
    }
    @media (max-width: 764px) {
        width: 100%;
        bottom: 0;
    }
`;

const ConnexAdminHead = styled.div`
    width: 100%;    
    display: flex;
    justify-content: center;
    margin: 2rem 0 ;
`;

const ConnexAdminBody = styled.form`
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const Label = styled.p`
    color: white;
`;

const CustomTextField = styled(TextField)`
    && {
        input {
            border: none;
            background-color: white;
            outline: none;
            &:focus {
                border: none;
                background-color: white;
            }
        }
        label {
            color: black; /* Couleur du label par défaut */
            &.Mui-focused {
                color: black; /* Couleur du label lorsque le TextField est en focus */
            }
        }
    }
`;

const ConnexAdminElt = styled.div`
    width: 100%;
    margin: 1rem;
    color: white;
    display: flex;
    justify-content: center;
`;


export default AdminConnexion
