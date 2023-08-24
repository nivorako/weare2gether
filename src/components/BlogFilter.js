import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import styled from '@emotion/styled';
import { Box, Button } from "@mui/material";

import { setFilter } from '../features/blogFilterSlice';

const BlogFilter = () => {

    const dispatch = useDispatch();

    const blogFilter = useSelector((state) => state.blogFilter);

    const blogs = ["tous", "conseils", "musiques", "danses"];

    const handleFilterClick = (newFilter) => {
        dispatch(setFilter(newFilter));
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
                    <StyledBtn onClick={() => handleFilterClick(null)}>Tous</StyledBtn>
                    <StyledBtn onClick={() => handleFilterClick("conseils")}>Conseils</StyledBtn>
                    <StyledBtn onClick={() => handleFilterClick("musiques")}>Musique</StyledBtn>
                    <StyledBtn onClick={() => handleFilterClick("danses")}>Danses</StyledBtn>
                </Box>
    )
};

const StyledBtn = styled(Button)(({theme}) =>({
    border: 'black thin solid',
    cursor: 'pointer',
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))

export default BlogFilter
