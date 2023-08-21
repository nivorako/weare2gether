import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import styled from "@emotion/styled";
import {Grid, Paper, Box} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
            <Box >
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Item>xs=8</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>xs=4</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>xs=4</Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item>xs=8</Item>
                    </Grid>
                </Grid>
            </Box>
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

const BlogContainer = styled.main`

`;

export default Blog;
