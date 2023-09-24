import React, { useState } from 'react';

import { 
    Button,
    Menu,
    MenuItem
} from '@mui/material';

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import styled from '@emotion/styled';

import PropTypes from 'prop-types';

const CustomBtn = ({ active, onClick, children, menuItems, onMenuItemClick }) => {

   
    const [anchorEl, setAnchorEl] = useState(null);
   
    const handleClick = (e) => {
        
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };    

    return (
        <>
            <StyledBtn active={active ? "active" : ""} onClick={onClick}>
                {children}
                {menuItems && 
                    (
                        <ExpandLessIcon 
                            onClick={(e) => handleClick(e)} 
                            sx={{
                                marginLeft: "2rem",
                               ":hover": {
                                    transform: "scale(1.1)"
                                }
                            }}
                        />
                    )
                }
            </StyledBtn>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {
                   menuItems && menuItems.map((item, index) => {
                       return ( <MenuItem key={index} onClick={() => onMenuItemClick(item)} >
                                    {item}
                                </MenuItem>)
                    })
                }
            </Menu>
        </>
    )
};

const StyledBtn = styled(Button)(({ active }) => ({
    border: active ? null : "black thin solid",
    backgroundColor: active ? "var(--primary)" : "white",
    cursor: "pointer",
    textAlign: "center",
    color: active ? "white" : "var(--black)",
    "&:hover": {
      border: "none",
      backgroundColor: "var(--primary)",
      color: "white",
      opacity: ".6",
    },
  }));

  CustomBtn.propTypes = {
    active: PropTypes.bool, // active doit être un booléen
    onClick: PropTypes.func, // onClick doit être une fonction
    children: PropTypes.node, // children peut être n'importe quel élément React
    menuItems: PropTypes.arrayOf(PropTypes.string), // menuItems est un tableau de chaînes
    onMenuItemClick: PropTypes.func,
}

export default CustomBtn;