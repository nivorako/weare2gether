import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

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

import imgTitle from "../assets/imgTitle.png"

import { setActivePage } from "../features/pageSlice";

const theme = createTheme();

const Blog = () => {
    const dispatch = useDispatch();

    // Mettre à jour l'état de la page active lorsque le composant est monté
    useEffect(() => {
        dispatch(setActivePage("Blog"));
    }, [dispatch]);

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
                        
                        <Grid item xs={4}>
                            <Card>
                                <CardHeader 
                                    title="Danses"
                                    subheader="18 / 11 / 2023"
                                />
                                <CardMedia
                                    component="img"
                                    image={imgTitle}
                                    alt="image test"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        date
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" component="h2">
                                        Titre de ce Blog
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Description de ce blog.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card>
                                <CardHeader 
                                    title="Conseils"
                                    subheader="18 / 11 / 2023"
                                />
                                <CardMedia
                                    component="img"
                                    image={imgTitle}
                                    alt="image test"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        date
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" component="h2">
                                        Titre de ce Blog
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Description de ce blog.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card>
                                <CardHeader 
                                    title="Musique"
                                    subheader="18 / 11 / 2023"
                                />
                                <CardMedia
                                    component="img"
                                    image={imgTitle}
                                    alt="image test"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        date
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" component="h2">
                                        Titre de ce Blog
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Description de ce blog.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card>
                                <CardHeader 
                                    title="Danses"
                                    subheader="18 / 11 / 2023"
                                />
                                <CardMedia
                                    component="img"
                                    image={imgTitle}
                                    alt="image test"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        date
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" component="h2">
                                        Titre de ce Blog
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Description de ce blog.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
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
`;

export default Blog;
