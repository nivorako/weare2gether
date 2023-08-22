import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import styled from "@emotion/styled";
import {
    Grid, 
    Paper, 
    Box, 
    Button, 
    Card, 
    CardMedia, 
    CardContent, 
    CardHeader,
    Typography
} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import imgTitle from "../assets/imgTitle.png";

import { setActivePage } from "../features/pageSlice";

import dataBlog from "../data/dataBlog.json";

const theme = createTheme();

const Blog = () => {
    const dispatch = useDispatch();

    // Mettre à jour l'état de la page active lorsque le composant est monté
    useEffect(() => {
        dispatch(setActivePage("Blog"));
    }, [dispatch]);

    dataBlog.forEach(t => console.log("tete: ", t.id))
    return (
        <ThemeProvider  theme={theme}>
            <BlogContainer>
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-around",
                        marginTop: "2rem"
                    }}

                >
                    <StyledBtn>Tous</StyledBtn>
                    <StyledBtn>Conseils</StyledBtn>
                    <StyledBtn>Musique</StyledBtn>
                    <StyledBtn>Danses</StyledBtn>
                </Box>
                <Box >
                    <Grid 
                        container spacing={2}
                        sx={{
                            marginTop:"2rem"
                        }}
                    >
                    {dataBlog.map((blog) => {   
                        return  <Grid item xs={12} sm={6} md={4} key={blog.id}>
                                
                                    <Link to="/#">
                                        <Card >
                                            <CardHeader 
                                                title={blog.category}
                                                subheader={blog.date}
                                            />
                                            <CardMedia
                                                component="img"
                                                image={blog.cover}
                                                alt="image test"
                                                style={{ height: '400px', objectFit: 'cover' }}
                                            />
                                            <CardContent>
                                                <Typography variant="body2" color="text.secondary">
                                                    {blog.date}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" component="h2">
                                                    Titre de ce Blog
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {blog.desc}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                
                                </Grid>
                    })}
                    </Grid>
                </Box>
            </BlogContainer>
        </ThemeProvider>
    )
       
};

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const StyledBtn = styled(Button)(({theme}) =>({
    border: 'black thin solid',
    cursor: 'pointer',
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))

const BlogContainer = styled.main`
    width: 80%;
    margin: auto;
    @media(max-width: 400px){
        width: 90%;
    }
`;

export default Blog;
