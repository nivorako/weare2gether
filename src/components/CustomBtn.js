import React from 'react';
import { Button } from '@mui/material';
import styled from '@emotion/styled';

const CustomBtn = ({ active, onClick, children }) => {
    return (
        <StyledBtn active={active ? "active" : ""} onClick={onClick}>
            {children}
        </StyledBtn>
    )
};

const StyledBtn = styled(Button)(({ theme, active }) => ({
    border: active ? null : "black thin solid",
    backgroundColor: active ? "var(--primary)" : "white",
    cursor: "pointer",
    textAlign: "center",
    color: active ? "white" : theme.palette.text.secondary,
    "&:hover": {
      border: "none",
      backgroundColor: "var(--primary)",
      color: "white",
      opacity: ".6",
    },
  }));

export default CustomBtn;