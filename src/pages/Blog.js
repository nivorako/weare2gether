import React, { useEffect, useState } from "react";
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
import { setSelectedCard } from "../features/blogCardSlice";

import dataBlog from "../data/dataBlog.json";

const theme = createTheme();

const Blog = () => {

    const selectedCard = useSelector((state) => state.blogCard.selectedCard)
    console.log("selectedCard :", selectedCard);
    const selectedBlog = dataBlog.find(blog => blog.id === selectedCard);
    console.log("selectedBlog: ", selectedBlog);
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
                {   selectedCard !== null ? 
                    (
                        <SelectedBlogBox>
                            <Box
                                sx={{
                                    width: "50%",
                                    margin: "auto"
                                }}

                            >
                                <img 
                                    src={selectedBlog.cover}
                                        alt="test" 
                                        style={{
                                            objectFit: "cover", 
                                            width:"100%", 
                                            height:"100%"
                                        }} 
                                />
                            </Box>
                            <Box
                                sx={{
                                    margin: "2rem 0"
                                }}
                            >
                                <Box
                                    sx={{
                                        width:"100%",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    }}
                                >
                                    <Typography
                                        composant="h2"
                                        variant="h5"
                                        sx={{
                                            marginLeft: "0"
                                        }}
                                    >
                                    { selectedBlog.title}
                                    </Typography>
                                    <Typography
                                        component="p"
                                        variant="body2"
                                    >
                                        {selectedBlog.date}
                                    </Typography>
                                </Box>
                                <Typography
                                    letterSpacing={1}
                                    sx={{
                                        marginTop: "4rem"
                                    }}
                                >
                                    {selectedBlog.desc}
                                </Typography>
                            </Box>
                        </SelectedBlogBox>
                    ) 
                    : 
                    (
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
                                        <Card 
                                            onClick={() => dispatch(setSelectedCard(blog.id))}
                                            sx={{
                                                cursor: "pointer",
                                                transition: ".5s",
                                            "&:hover":{
                                                    transform: "scale(1.02)",
                                                    boxShadow: "1px 1px 5px grey"
                                            } 
                                            }}
                                        >
                                            <CardHeader 
                                                title={blog.category}
                                                subheader={blog.date}
                                            />
                                            <CardMedia
                                                component="img"
                                                image={blog.cover}
                                                alt="image test"
                                                style={{ height: '300px', objectFit: 'cover' }}
                                            />
                                            <CardContent>
                                                <Typography variant="body2" color="text.secondary">
                                                    {blog.date}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" component="h2">
                                                    Titre de ce Blog
                                                </Typography>
                                                
                                            </CardContent>
                                        </Card>   
                                    </Grid>
                                    )
                            })}
                            </Grid>
                        </Box>
                    )
                }
            </BlogContainer>
        </ThemeProvider>
    )
       
};

const BlogContainer = styled.main`
    width: 80%;
    margin: 4rem auto;
    @media(max-width: 400px){
        width: 90%;
    }
`;

const SelectedBlogBox = styled.div`
    width: 80%;
    margin: 4rem auto 0 auto;
    color: var(--black);
`;

export default Blog;
