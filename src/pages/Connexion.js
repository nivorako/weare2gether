import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import styled from "@emotion/styled";
import { Paper, Grid, TextField, Typography } from "@mui/material";

import CustomBtn from "../components/CustomBtn";

import { setActivePage } from "../features/pageSlice";
import { setCurrentUser, setLoading, setAuth } from "../features/authSlice";

// import Parse from "../utils/parseConfig";

import Parse from "parse/dist/parse.min.js";

const APPLICATION_ID = "GXgBEka1jlGx1EbzJcgbtOuv1FP9CnH5GO4ZpYMV";
const HOST_URL = "https://parseapi.back4app.com/";
const JAVASCRIPT_KEY = "3it9PTiIq5GZtqnBkkn8VFJAeJZeOjFditnE6DQM";

Parse.initialize(APPLICATION_ID, JAVASCRIPT_KEY);
Parse.serverURL = HOST_URL;

const Connexion = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Mettre à jour l'état de la page active lorsque le composant est monté
     useEffect(() => {
        dispatch(setActivePage("Connexion"));
    }, [dispatch]);

    const handleNavigateSignUp = () => {
        navigate("/SignUp");
    };


    const currentUser = Parse.User.current();
    const [role, setRole] = useState("");
    
    useEffect(() => {
        if(currentUser){
            const userRole = currentUser.get("role");
            setRole(userRole);
            
        }
    }, [currentUser]);

    const initialFormState = {
        email: "",
        password: "",
    };

    const [formData, setFormData] = useState(initialFormState);
    const [sessionToken, setSessionToken] = useState("");
    console.log("sessionToken :", sessionToken);
   

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const email = data.get("email");
        const password = data.get("password");
        const userName = email.split("@")[0];
        try {
            const loggedUser = await Parse.User.logIn(email, password);
            const currentUser = Parse.User.current();
            dispatch(setLoading(true));
            if (loggedUser === currentUser) {
                dispatch(setLoading(false));
                setFormData(initialFormState);
                const sessionToken = loggedUser.getSessionToken();
                dispatch(setAuth(sessionToken));
                dispatch(
                    setCurrentUser({ username: userName, id: currentUser.id }),
                );
                alert("Félicitation, vous êtes connecté");
                navigate("/");
            }
        } catch (error) {
            console.error("error :", error);
            alert(error);
        }
    };
    
    return (
        <ConnexContainer id="connexion">
            <ConnexBox>
                <ConnexHead>
                    <Typography
                        component="h2"
                        variant="h5"
                        sx={{
                            "@media(max-width: 600px)":{
                                marginTop: "1rem"
                            }
                        }}
                    >
                        Connectez - vous
                    </Typography>
                    <CustomBtn
                        onClick={handleNavigateSignUp}
                    >
                        Créez votre compte
                    </CustomBtn>
                </ConnexHead>
                <ConnexBody onSubmit={handleSubmit}>
                    <Grid container>
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
                    <ConnexElt>
                        <CustomBtn 
                            type="submit"
                        >
                            Envoyer
                        </CustomBtn>

                        <CustomBtn>
                            Mot de passe oublié ??
                        </CustomBtn>
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
    color: var(--secondary);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    // background-color: #7f1f00;

    elevation: 16;
    @media (max-width: 1024px) {
        width: 70%;
    }
    @media (max-width: 764px) {
        width: 100%;
        bottom: 0;
    }
    @media (max-width: 600px) {
       height: 700px;
    }
`;

const ConnexHead = styled.div`
    width: 100%;      
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 0 ;
    @media(max-width: 600px){
        flex-direction: column-reverse;
        align-items: center;
    }
`;

const ConnexBody = styled.form`
    width: 100%;
   
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const Label = styled.p`
    
`;

const CustomTextField = styled(TextField)`
    && {
        input {
            border-color: var(--secondary) !important;
            background-color: white;
            
            &:focus {
                
                background-color: white;
                & ~ fieldset {
                    border-color: var(--secondary); /* Couleur de bordure de focus */
                }
            }
        }
        label {
            color: var(--secondary); /* Couleur du label par défaut */
            &.Mui-focused {
                color: var(--secondary); /* Couleur du label lorsque le TextField est en focus */
            }
        }
    }
`;

const ConnexElt = styled.div`
    width: 50%;
    height: 100px;
    margin: 3rem auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 446px) {
        height: 150px;
     }
`;

export default Connexion;
