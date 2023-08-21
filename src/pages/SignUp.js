import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

import styled from '@emotion/styled';
import { 
    Paper,
    Typography,
    TextField,
    Grid,
    Box,
    Button
    } from "@mui/material";

// import Parse from "../utils/parseConfig";

import Parse from "parse/dist/parse.min.js";

const APPLICATION_ID="GXgBEka1jlGx1EbzJcgbtOuv1FP9CnH5GO4ZpYMV"
const HOST_URL="https://parseapi.back4app.com/"
const JAVASCRIPT_KEY="3it9PTiIq5GZtqnBkkn8VFJAeJZeOjFditnE6DQM"

Parse.initialize(APPLICATION_ID, JAVASCRIPT_KEY);
Parse.serverURL = HOST_URL;

const SignUp = () => {

    const navigate = useNavigate();

    const initialFormState = {
        userName:"",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    };

    const [formData, setFormData] = useState(initialFormState);

    const [passwordMatchError, setPasswordMatchError] = useState(false);
     
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if (formData.password !== formData.confirmPassword) {
            setPasswordMatchError(true);
            return; // Empêche la soumission si les mots de passe ne correspondent pas
        }
        setPasswordMatchError(false)
        console.log("ok submit")
        const data = new FormData(e.currentTarget)
        const email = data.get("email");
		const password = data.get("password");
		const firstName = data.get("firstName");
		const lastName = data.get("lastName");
        const userName = data.get("userName");

        try {
			await Parse.User.signUp(userName, password, {
                email: email,
				firstName: firstName,
				lastName: lastName,
		    })
			setFormData(initialFormState);
			navigate("/Connexion");
			return true;
		} catch (error) {
			alert(` ${error}`);
			return false;
		}
    };

    return (
        <SignUpContainer>
            <SignUpBox> 
                <Box
                    height="100%"
                    component="form"
                    onSubmit={handleSubmit}
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Box>
                        <Grid container spacing={2}>
                            <Grid item sm={6} xs={12}>
                                <Typography>
                                    Identifiant
                                </Typography>
                                <CustomTextField 
                                    required
                                    fullWidth
                                    id="userName"
                                    //label="email"
                                    name="userName"
                                    autoComplete="userName"
                                    value={formData.userName}
                                    onChange={(e) =>
                                        setFormData({ ...formData, userName: e.target.value })
                                    }
                                    inputprops={{
                                        "data-testid": "userName-input" // Ajoutez un attribut data-testid
                                    }}
                                />                          
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <Typography>
                                    Nom 
                                </Typography>
                                <CustomTextField 
                                    required
                                    fullWidth
                                    id="lastName"
                                    //label="email"
                                    name="lastName"
                                    autoComplete="lastName"
                                    value={formData.lastName}
                                    onChange={(e) =>
                                        setFormData({ ...formData, lastName: e.target.value })
                                    }
                                    inputprops={{
                                        "data-testid": "lastName-input" // Ajoutez un attribut data-testid
                                    }}
                                />
                                
                            </Grid>
                           
                            <Grid item sm={6} xs={12}>
                                <Typography>
                                    Email
                                </Typography>
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
                            <Grid item sm={6} xs={12}>
                                <Typography>
                                    Prénom
                                </Typography>
                                <CustomTextField 
                                    required
                                    fullWidth
                                    id="firstName"
                                    //label="email"
                                    name="firstName"
                                    autoComplete="firstName"
                                    value={formData.firstName}
                                    onChange={(e) =>
                                        setFormData({ ...formData, firstName: e.target.value })
                                    }
                                    inputprops={{
                                        "data-testid": "firstName-input" // Ajoutez un attribut data-testid
                                    }}
                                />                          
                            </Grid>
                           
                        </Grid>
                    </Box> 
                    <SignUpPswdBox>
                       <Grid  container >
                            <Box mb={4} width="100%">
                                <Grid item xs={12} >
                                    <Typography>
                                        Mot de passe 
                                    </Typography>
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
                                {passwordMatchError && (
                                    <Typography color="white">
                                        Les mots de passe ne correspondent pas.
                                    </Typography>
                                )}
                            </Box>

                            <Grid item xs={12} >
                                <Typography>
                                    Confirmez votre mot de passe
                                </Typography>
                                <CustomTextField 
                                    required
                                    fullWidth
                                    id="ConfirmPassword"
                                    //label="email"
                                    name="ConfirmPassword"
                                    autoComplete="ConfirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={(e) =>
                                        setFormData({ ...formData, confirmPassword: e.target.value })
                                    }
                                    inputprops={{
                                        "data-testid": "confirmPassword-input" // Ajoutez un attribut data-testid
                                    }}
                                /> 
                            </Grid>
                       </Grid>
                    </SignUpPswdBox> 
                    <StyledButton type='submit'>Envoyer</StyledButton>
                    <Typography>
                        Créez un compte pour accéder à votre profil, réserver ou s'abonner à un évènement
                    </Typography>
                </Box>
            </SignUpBox>
        </SignUpContainer>
    )
};



const SignUpContainer = styled.main`
    position: relative;
    width: 100%;
    height: 50vh;
    background-color: var(--secondary);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SignUpBox = styled(Paper)`
    position: absolute;
    bottom: 50px;
    width: 50%;
    height: 600px;
    color: white;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    @media (max-width: 600px){
        height: 650px;
    }
`;

const SignUpPswdBox = styled.div`
    width: 50%;
    @media(max-width: 600px){
        width: 100%;
    }
`;

const CustomTextField = styled(TextField)`
    && {
        input {
            border: none;
            background-color: white;
            outline: none;
            height: 5px;
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

const StyledButton = styled(Button)`
    color: white;
    opacity: .8;
    @media(max-width: 600px){
        margin: 1rem;
    }
    &:hover {
        opacity: 1;
        box-shadow: .5px .5px .5px 2px white;
    }
`;

export default SignUp
