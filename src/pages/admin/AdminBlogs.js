import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import { setSelectedCard } from "../../features/blogCardSlice";

import styled from '@emotion/styled';
import { 
    Typography,
    Box ,
    TextField
} from '@mui/material';
import { setActivePage } from '../../features/pageSlice';

import Parse from "parse/dist/parse.min.js";

const APPLICATION_ID = "GXgBEka1jlGx1EbzJcgbtOuv1FP9CnH5GO4ZpYMV";
const HOST_URL = "https://parseapi.back4app.com/";
const JAVASCRIPT_KEY = "3it9PTiIq5GZtqnBkkn8VFJAeJZeOjFditnE6DQM";

Parse.initialize(APPLICATION_ID, JAVASCRIPT_KEY);
Parse.serverURL = HOST_URL;

const AdminBlogs = () => {

    const dispatch = useDispatch();
     // Mettre à jour l'état de la page active lorsque le composant est monté
     useEffect(() => {
        dispatch(setActivePage("AdminBlogs"));
    }, [dispatch]);

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const blog = new Parse.Object("Blog")
        const category = formData.category;
        const desc = formData.desc;
        const title = formData.title;
        
        const imgFile = new Parse.File("image.png", e.target.querySelector("input[type=file]").files[0])
        blog.set("desc", desc);
        blog.set("category", category);
        blog.set("cover", imgFile);
        blog.set("title", title);
        try {
            const res = await blog.save();
            dispatch(setSelectedCard(null));
            console.log("blog enregistré :", res);
        } catch (error) {
            console.error("erreur :", error);
        }
    };

    const initialFormState = {
        category: "",
        title: "",
        desc: "",
        cover: ""
    }

    const [formData, setFormData] = useState(initialFormState);
    
    return (
        <AdminBlogContainer>
        
            <Typography
                component="h1"
                variant="h4"
                sx={{
                    textAlign:"center"
                }}
            >
                Poster un BLOG
            </Typography>

            <Form onSubmit={handleSubmit}>
                <Titre>Ajouter votre photo ici</Titre>
                <Button 
                    component="label" 
                    variant="contained" 
                    startIcon={<CloudUploadIcon />} 
                    sx={{
                        backgroundColor:"white", 
                        color:"black"
                        }}
                >
                    Photos
                    <Input type="file" accept='image/*'/>
                </Button>
                <Titre>Ajouter la catégorie de votre blog ici</Titre>
                <CustomTextField 
                     required
                     fullWidth
                     id="category"
                     //label="email"
                     name="category"
                     autoComplete="category"
                     value={formData.category}
                     onChange={(e) =>
                         setFormData({
                             ...formData,
                             category: e.target.value,
                         })
                     }
                     inputprops={{
                         "data-testid": "category-input", // Ajoutez un attribut data-testid
                     }}
                />
                <Titre>Ajouter le titre de votre blog ici</Titre>
                <CustomTextField 
                     required
                     fullWidth
                     id="title"
                     //label="email"
                     name="title"
                     autoComplete="title"
                     value={formData.title}
                     onChange={(e) =>
                         setFormData({
                             ...formData,
                             title: e.target.value,
                         })
                     }
                     inputprops={{
                         "data-testid": "title-input", // Ajoutez un attribut data-testid
                     }}
                />
                 <Titre>Ajouter le contenu de votre blog ici</Titre>
                <CustomTextField 
                     required
                     fullWidth
                     id="desc"
                     //label="email"
                     name="desc"
                     autoComplete="desc"
                     multiline
                     value={formData.desc}
                     onChange={(e) =>
                         setFormData({
                             ...formData,
                             desc: e.target.value,
                         })
                     }
                     inputprops={{
                         "data-testid": "desc-input", // Ajoutez un attribut data-testid
                     }}
                />
                <Button type='submit' sx={{color:"black"}}>Envoyer</Button>
            </Form>

        </AdminBlogContainer>
    )
};

const Input = styled.input`

`;

const AdminBlogContainer = styled.main`
    width: 100vw;
    min-height: 100vh;
`;

const Form = styled.form`
    width: 70%;
    margin: auto;
`;

const Titre = styled.h3`

`;

const CustomTextField = styled(TextField)`

`;

export default AdminBlogs;
