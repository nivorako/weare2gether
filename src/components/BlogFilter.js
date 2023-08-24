import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';
import { Box, Button } from "@mui/material";

import { setFilter } from '../features/blogFilterSlice';
import { setSelectedCard } from '../features/blogCardSlice';

const BlogFilter = () => {

    const dispatch = useDispatch();

    const blogFilter = useSelector((state) => state.blogFilter.filter);

    const handleFilterClick = (newFilter) => {
        if(newFilter === null){
            dispatch(setFilter(null));
            dispatch(setSelectedCard(null));
        }else{
            dispatch(setFilter(newFilter));
            dispatch(setSelectedCard(null));
        }
    };

     return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                marginTop: "2rem"
            }}

        >
            <StyledBtn 
                active={blogFilter === null ? 'true' : 'false'}
                onClick={() => handleFilterClick(null)}
            >
                Tous
            </StyledBtn>
            <StyledBtn 
                active={blogFilter === "conseils" ? 'true' : 'false'}
                onClick={() => handleFilterClick("conseils")}
            >
                Conseils
            </StyledBtn>
            <StyledBtn 
                active={blogFilter === "musiques" ? 'true' : 'false'}
                onClick={() => handleFilterClick("musiques")}
            >
                Musique
            </StyledBtn>
            <StyledBtn 
                active={blogFilter === "danses" ? 'true' : 'false'}
                onClick={() => handleFilterClick("danses")}
            >
                Danses
            </StyledBtn>
        </Box>
    )
};

const StyledBtn = styled(Button)(({theme, active}) =>({
    border: active ? null : 'black thin solid',
    backgroundColor: active ? 'var(--primary)' : "white",
    cursor: 'pointer',
    textAlign: 'center',
    color: active ? "white" : theme.palette.text.secondary,
    "&:hover":{
        border: "none",
        backgroundColor: "var(--primary)",
        color: "white",
        opacity: ".6"
    }
}));



export default BlogFilter
