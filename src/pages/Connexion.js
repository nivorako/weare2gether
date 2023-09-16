import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import styled from "@emotion/styled";
import { Paper, Grid, TextField, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import { setActivePage } from "../features/pageSlice";
import { setCurrentUser, setLoading, setAuth } from "../features/authSlice";
import axios from "axios";
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

    useEffect(() => {
        const storedUserData = localStorage.getItem("currentUser");
        if(storedUserData){
            const userData = JSON.parse(storedUserData);
            try {
                
            } catch (error) {
                
            }
        }
    }, [])
    // Mettre à jour l'état de la page active lorsque le composant est monté
     useEffect(() => {
        dispatch(setActivePage("Connexion"));
    }, [dispatch]);

    const handleNavigateSignUp = () => {
        navigate("/SignUp");
    };

    const handleNavigateAdminConnexion = () => {       
        {
            role === "" ? navigate("/AdminConnexion") : navigate("/")
        };
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
   
    async function getJWT() {
        try {
          const response = await axios.post("https://parseapi.back4app.com/", {}, {
            headers: {
              'X-Parse-Application-Id': 'GXgBEka1jlGx1EbzJcgbtOuv1FP9CnH5GO4ZpYMV',
              'X-Parse-REST-API-Key': '3it9PTiIq5GZtqnBkkn8VFJAeJZeOjFditnE6DQM',
              'X-Parse-Session-Token': sessionToken // Remplacez par le token de l'utilisateur authentifié
            }
          });
      
          const jwt = response.data.result;
          console.log('JWT:', jwt);
      
          // Maintenant que vous avez le JWT, vous pouvez l'utiliser pour les futures requêtes
          // Vous n'avez pas besoin de passer le token de session pour chaque requête
        } catch (error) {
          console.error('Erreur lors de la récupération du JWT :', error);
        }
      }
      
      //getJWT();

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
                    <Typography
                        component="h2"
                        variant="h5"
                        onClick={handleNavigateSignUp}
                        sx={{
                            
                            opacity: ".6",
                            "&:hover":{
                                cursor: "pointer",
                                opacity: "1",
                                boxShadow: ".1px 1px white",
                            },
                            "@media(max-width: 600px)":{
                                marginTop: "1rem",
                                marginBottom: "2rem"
                            }
                        }}
                    >
                        Créez votre compte
                    </Typography>
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
                            Envoyer
                        </Button>
                    </ConnexElt>
                    <ConnexElt>
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
                    </ConnexElt>
                    <ConnexElt>
                        <Button
                            onClick={handleNavigateAdminConnexion}
                            sx={{
                                marginLeft: "1rem",
                                color: "white",
                                opacity: ".6",
                                "&:hover": {
                                    opacity: "1",
                                    boxShadow: ".1px 1px white",
                                },
                            }}
                        >
                            Administrateur
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
