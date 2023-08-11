import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import styled from "@emotion/styled";
import { Paper, Grid, TextField, Button,Box } from "@mui/material"
import { useSelector } from "react-redux";

import { setActivePage } from "../features/pageSlice";
import authSlice, { setCurrentUser } from "../features/authSlice";

import Parse from "parse/dist/parse.min.js";

const PARSE_APPLICATION_ID = "GXgBEka1jlGx1EbzJcgbtOuv1FP9CnH5GO4ZpYMV";
const PARSE_HOST_URL = "https://parseapi.back4app.com/";
const PARSE_JAVASCRIPT_KEY = "3it9PTiIq5GZtqnBkkn8VFJAeJZeOjFditnE6DQM";
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

const Connexion = () => {

    const { currentUser } = useSelector((store) => store.auth);
    console.log('current :', currentUser)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/SignUp");
    }

    const initialFormState = {
        email: "",
        password: "",
    };
    const [formData, setFormData] = useState(initialFormState)
    
    const handleSubmit = async (e)=> {
        e.preventDefault();
        const data = new FormData(e.currentTarget)
        const email = data.get("email");
        const password = data.get("password");
        try{
            const loggedUser = await Parse.User.logIn(email, password);
            const currentUser = Parse.User.current();
            if(loggedUser === currentUser){
                setFormData(initialFormState);
                dispatch(setCurrentUser(currentUser))
                console.log("success yeah !!");
            }
        }catch(error) {
            console.error("error :", error);
        }
    }

    // Mettre à jour l'état de la page active lorsque le composant est monté
    useEffect(() => {
        dispatch(setActivePage("Connexion"));
    }, [dispatch]);

    return (
        <ConnexContainer id="connexion">
            <ConnexBox>
                <ConnexHead>
                    <h2>Connectez - vous</h2>
                </ConnexHead>
                <ConnexBody
                    onSubmit={handleSubmit}
                >
                    <Grid container >
                        <Grid item xs={12} sm={12}>
                            <Label>Email  *</Label>
                            <CustomTextField
                                required
                                fullWidth
                                id="email"
                                //label="email"
                                name="email"
                                autoComplete="email"
                                value={formData.email}
                                onChange={(e) =>
                                	setFormData({ ...formData, email: e.target.value })
                                }
                                inputprops={{
                                	"data-testid": "email-input" // Ajoutez un attribut data-testid
                                }}
                        
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Label>Mot de passe  *</Label>
                            <CustomTextField
                                required
                                fullWidth
                                id="password"
                                //label="email"
                                name="password"
                                autoComplete="password"
                                value={formData.password}
                                onChange={(e) =>
                                	setFormData({ ...formData, password: e.target.value })
                                }
                                inputprops={{
                                	"data-testid": "password-input" // Ajoutez un attribut data-testid
                                }}
                        
                            />
                        </Grid>
                    </Grid>
                    <ConnexElt>
                        <Button 
                            type="sumbit"
                            sx={{
                                color:"white",
                                opacity:".8",
                                "&:hover":{
                                    opacity: "1",
                                    boxShadow: ".5px .5px .5px 2px white"
                                }
                            }}
                        
                        >
                            Connectez-vous
                        </Button>
                    </ConnexElt>
                    <ConnexElt>
                        <Button 
                            sx={{
                                color:"white",
                                opacity:".8",
                               
                                "&:hover":{
                                    opacity: "1",
                                    boxShadow: ".5px .5px .5px 2px white"
                                }
                            }}
                        >
                            Mot de passe oublié ??
                        </Button>
                    </ConnexElt>
                    <ConnexElt>
                        <Button
                            onClick={handleNavigate}
                            sx={{
                                marginLeft:"1rem",
                                color:"white",
                                opacity: ".8",
                                "&:hover":{
                                    opacity: "1",
                                    boxShadow: ".5px .5px .5px 2px white"
                                }
                            }}
                        >
                            Créez votre compte
                        </Button>
                    </ConnexElt>
                </ConnexBody>
            </ConnexBox>
        </ConnexContainer>
    );
};

const ConnexContainer = styled.main`
    position: relative;
    width: 100%;
    height: 50vh;
    background-color: var(--secondary);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ConnexBox = styled(Paper)`
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
    @media (max-width: 1024px){
        width: 70%;
    }
    @media (max-width: 764px){
        width: 100%;
        bottom: 0;
    }
`;

const ConnexHead = styled.div`

`;

const ConnexBody = styled.form`
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

const ConnexElt = styled.div`
    width: 100%;
    margin: 1rem;
    color: white;
    display: flex;
    justify-content: center;
`;

export default Connexion;
