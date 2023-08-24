import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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

import styled from "@emotion/styled";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import BlogFilter from "../components/BlogFilter";

import { setActivePage } from "../features/pageSlice";

import dataBlog from "../data/dataBlog.json";

const theme = createTheme();

const Blog = () => {
    const dispatch = useDispatch();

    // Mettre à jour l'état de la page active lorsque le composant est monté
    useEffect(() => {
        dispatch(setActivePage("Blog"));
    }, [dispatch]);

    const blogFilter = useSelector((state) => state.blogFilter);
    
    const filteredBlogs = blogFilter.filter !== null ? dataBlog.filter(blog => blog.category === blogFilter.filter) : dataBlog;
    
    return (
        <ThemeProvider  theme={theme}>
            <BlogContainer id="blog">
                <BlogFilter />
                <Box >
                    <Grid 
                        container spacing={2}
                        sx={{
                            marginTop:"2rem"
                        }}
                    >
                    {filteredBlogs.map((blog) => {   
                        return  (
                            <Grid item xs={12} sm={6} md={4} key={blog.id}>                                                                    
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
                            </Grid>
                            )
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
}));

const BlogContainer = styled.main`
    width: 80%;
    margin: auto;
    @media(max-width: 400px){
        width: 90%;
    }
`;

export default Blog;
