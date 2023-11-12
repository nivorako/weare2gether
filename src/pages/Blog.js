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
    Typography,
} from "@mui/material";

import styled from "@emotion/styled";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import BlogFilter from "../components/BlogFilter";

import { setActivePage } from "../features/pageSlice";
import { setSelectedCard } from "../features/blogCardSlice";

import Parse from "parse/dist/parse.min.js";

const APPLICATION_ID = "GXgBEka1jlGx1EbzJcgbtOuv1FP9CnH5GO4ZpYMV";
const HOST_URL = "https://parseapi.back4app.com/";
const JAVASCRIPT_KEY = "3it9PTiIq5GZtqnBkkn8VFJAeJZeOjFditnE6DQM";

Parse.initialize(APPLICATION_ID, JAVASCRIPT_KEY);
Parse.serverURL = HOST_URL;

const theme = createTheme();

/**
 * 
 * @returns {JSX.Element} - component displays all blogs
 */

const Blog = () => {
    const [currentBlog, setCurrentBlog] = useState([])
    
    useEffect(() => {
        const blog = new Parse.Query("Blog");
        blog
            .find()
            .then((res) => {
                setCurrentBlog(res);
            })
            .catch((error) => {
                console.error("error :", error);
            })
    }, []);

    const formatDate = (date) => {
        const formattedDate = new Date(date);
        const mois = formattedDate.toLocaleString('default', { month: 'short' });
        const jour = formattedDate.getDate();
        const annee = formattedDate.getFullYear();
        return `${mois} ${jour} ${annee}`;
    }
 
    const selectedCard = useSelector((state) => state.blogCard.selectedCard);
    console.log("selected card", selectedCard);
    const selectedBlog = currentBlog.find((blog) => blog.id === selectedCard);
   
    const dispatch = useDispatch();

    // Mettre à jour l'état de la page active lorsque le composant est monté
    useEffect(() => {
        dispatch(setActivePage("Blog"));
    }, [dispatch]);

    // Réinitialiser selectedCard lorsque le composant se démonte
    useEffect(() => {
        return () => {
            dispatch(setSelectedCard(null));
        };
    }, []);
    

    const blogFilter = useSelector((state) => state.blogFilter);

    const filteredBlogs =
        blogFilter.filter !== null
            ? currentBlog.filter((blog) => blog.get("category") === blogFilter.filter)
            : currentBlog
            ;

    const handleBlogClick = (blogId) => {
        console.log("Dispatching setSelectedCard with ID:", blogId);
        dispatch(setSelectedCard(blogId))
    }

    return (
        <ThemeProvider theme={theme}>
            <BlogContainer id="blog">
                <BlogFilter />
                {selectedCard !== null ? (
                    <SelectedBlogBox>
                        <Box
                            sx={{
                                width: "50%",
                                margin: "auto",
                            }}
                        >
                            <img
                                src={selectedBlog.get("cover").url()}
                                alt="test"
                                style={{
                                    objectFit: "cover",
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                        </Box>
                        <Box
                            sx={{
                                margin: "2rem 0",
                            }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <Typography
                                    composant="h2"
                                    variant="h5"
                                    sx={{
                                        marginLeft: "0",
                                    }}
                                >
                                    {selectedBlog.get("title")}
                                </Typography>
                                <Typography component="p" variant="body2">
                                    {formatDate(selectedBlog.get("createdAt"))}
                                </Typography>
                            </Box>
                            <Typography
                                letterSpacing={1}
                                sx={{
                                    marginTop: "4rem",
                                }}
                            >
                                {selectedBlog.get("desc")}
                            </Typography>
                        </Box>
                    </SelectedBlogBox>
                ) : (
                    <Box>
                        <Grid
                            container
                            spacing={2}
                            sx={{
                                marginTop: "2rem",
                            }}
                        >
                            {filteredBlogs.map((blog) => {
                                return (
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        md={4}
                                        key={blog.id}
                                    >
                                        <Card
                                            onClick={ () => handleBlogClick(blog.id)}
                                            sx={{
                                                cursor: "pointer",
                                                transition: ".5s",
                                                "&:hover": {
                                                    transform: "scale(1.02)",
                                                    boxShadow:
                                                        "1px 1px 5px grey",
                                                },
                                            }}
                                        >
                                            <CardHeader
                                                title={blog.get("category")}
                                                subheader={formatDate(blog.get("createdAt"))}
                                                sx={{display:"flex"}}
                                            />
                                            <CardMedia
                                                component="img"
                                                image={blog.get("cover").url()}
                                                alt="image test"
                                                style={{
                                                    height: "300px",
                                                    objectFit: "cover",
                                                }}
                                            />
                                            <CardContent>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                >
                                                    {blog.date}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                    component="h2"
                                                >
                                                    {blog.get("title")}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Box>
                )}
            </BlogContainer>
        </ThemeProvider>
    );
};

const BlogContainer = styled.main`
    width: 80%;
    margin: 4rem auto;
    @media (max-width: 400px) {
        width: 90%;
    }
`;

const SelectedBlogBox = styled.div`
    width: 80%;
    margin: 4rem auto 0 auto;
    color: var(--black);
`;

export default Blog;
