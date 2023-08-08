import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import styled from "@emotion/styled";
import { Paper, Grid, TextField, Button,Box } from "@mui/material"

import { setActivePage } from "../features/pageSlice";

const Connexion = () => {
    const dispatch = useDispatch();
    const initialFormState = {
        email: "",
        password: "",
    };
    const [formData, setFormData] = useState(initialFormState)
console.log("formdata:", formData)
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
                <ConnexBody>
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
                        <Box 
                            sx={{
                                marginRight:"1rem",
                                opacity: ".8",
                            }}
                        >
                            <p>Pas encore inscrit(e)s ??</p>
                        </Box>
                        <Button
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
    bottom: 100px;
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
