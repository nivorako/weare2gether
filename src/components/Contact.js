import React from 'react';
import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import { 
    Button, 
    Box, 
    Grid, 
    TextField, 
    FormControlLabel, 
    Checkbox, 
    TextareaAutosize, 
    InputLabel, 
    checkboxClasses 
} from "@mui/material";

const Contact = () => {
    return (
        <ContactContainer>
            <ContactBox>
                <ContactHead>
                    <H2>Besoins d'une informations supplémentaire ??</H2>
                    <H3>CONTACTEZ - NOUS</H3>
                </ContactHead>
                
                <ContactBody>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <ContactInput>
                            <Grid  container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Label>Nom</Label>
                                    <CustomTextField
                                        required
                                        fullWidth
                                        id="email"
                                        //label="email"
                                        name="email"
                                        autoComplete="email"
                                        // value={formData.email}
                                        // onChange={(e) =>
                                        // 	setFormData({ ...formData, email: e.target.value })
                                        // }
                                        // inputprops={{
                                        // 	"data-testid": "email-input" // Ajoutez un attribut data-testid
                                        // }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Label>Prenom</Label>
                                    <CustomTextField
                                        required
                                        fullWidth
                                        id="email"
                                        name="email"
                                        autoComplete="email"
                                       
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Label>Email</Label>
                                    <CustomTextField
                                        required
                                        fullWidth
                                        id="email"
                                        name="email"
                                        autoComplete="email"
                                        
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Label>Telephone</Label>
                                    <CustomTextField
                                        required
                                        fullWidth
                                        id="email"
                                        name="email"
                                        autoComplete="email"
                                        
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Box>Message :</Box>
                                    <CustomTextarea
                                        required
                                        
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        sx={{
                                            width: "100%",
                                            display: "flex",
                                            alignItems: "start"
                                        }}
                                        control={
                                            <Checkbox 
                                                value="allowExtraEmails" 
                                                color="primary" 
                                                sx={{
                                                    '&.Mui-checked': {
                                                      color: 'white', // Couleur de la case cochée
                                                    },
                                                    [`&, &.${checkboxClasses.checked}`]: {
                                                      color: 'white', // Couleur de la case non cochée
                                                    },
                                                }}
                                            />
                                        }
                                        label="      En soumettant ce formulaire, j'accepte que mes 
                                        données personnelles soient utilisées pour me recontacter. 
                                        Aucun autre traitement ne sera effectué avec mes 
                                        informations. Pour connaître et exercer vos droits, veuillez 
                                        consultez la Politique de confidentialité."
                                    />
                                </Grid>
                            </Grid>
                        </ContactInput>
                        <ContactLinkItems>
                            <Link to="#" style={{textDecoration: 'none', color: 'white'}}>
                                <ContactLinkItem>amm@rakoto.fr</ContactLinkItem>
                            </Link>
                            
                            <ContactLinkItem>06.06.77.88.99</ContactLinkItem>
                            <ContactLinkItem>Facebook</ContactLinkItem>
                        </ContactLinkItems>
                    </Box>
                    
                    <ContactSubmit>
                        <ContactBtn>Envoyer</ContactBtn>
                    </ContactSubmit>
                </ContactBody>       
            </ContactBox>
        </ContactContainer>
    )
};

const ContactContainer = styled.div`
    width: 100%;
  
    background-color: var(--secondary);
`;

const ContactBox = styled.div`
    width: 50%;
    height: 100%;
    margin: 0 auto;
    color: white;
    padding-bottom: 2rem;
`;

const ContactHead = styled.div`
    width: 100%;
    padding-top: 4rem;
    text-align: center;
`;

const H3 = styled.h3`
    font-size: 32px;
    font-family: Lora;
`;

const H2 = styled.h2`

`;

const ContactBody = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    background-color: var(--primary);
`;

const ContactInput = styled.div`
    width: 70%;
    padding: .5rem;
`;

const ContactLinkItems = styled.div`
    width: 30%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const ContactLinkItem = styled.div`
    
`;

const ContactSubmit = styled.div`
    margin: 1rem;
`;

const ContactBtn = styled(Button)`
    color: white;
    background-color: var(--secondary);
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

const CustomTextarea = styled(TextareaAutosize)`
    width: 100%;
    height: 200px; /* Height personnalisé */ 
`;

const Label = styled.p`
    color: white;
`;

export default Contact
