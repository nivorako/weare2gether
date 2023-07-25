import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setDrawer } from "../features/drawerSlice";

import { AppBar, Toolbar, Button, Drawer, Box, Divider } from "@mui/material";
import styled from '@emotion/styled'
import { useMediaQuery } from '@mui/material';

import Logo from "../assets/Logo.png";
import User from "../assets/user4.svg";
import ShopBskt from "../assets/shopBskt.svg";
import Menu from "../assets/menuWhite.svg";

const Header = () => {

    const dispatch = useDispatch();

    const isMobile = useMediaQuery("(max-width:768px)",  {noSsr: true}); 

    const drawer = useSelector(state => state.drawer);

    const toggleDrawer = () => {
        dispatch(setDrawer());  
    };

    return (
        <AppBar 
            position="static" 
            sx={{
                backgroundColor:"#cf3201",
                height:"400px",
                display:"flex",
                flexDirection:"column",
                justifyContent: "space-between"
            }}
        >
            <Toolbar 
                sx={{
                    marginTop:"1rem",
                    display:"flex",
                    justifyContent:"space-between"
                }}
            >
                <HeaderLink >
                    <img src={Logo} alt="logo" />
                </HeaderLink> 
                {
                    isMobile ?  <HeaderMenu onClick={toggleDrawer}>
                                    <img src={Menu} alt="menu" /> 
                                </HeaderMenu> 
                            :
                   ( <HeaderNav >
                    <HeaderLink >
                        <Button variant="text" sx={{color:"white"}}>BLOG</Button>
                    </HeaderLink>
                    <HeaderLink >
                        <Button variant="text" sx={{color:"white"}}>BLOG</Button>
                    </HeaderLink>
                    <HeaderLink >
                        <img src={User} alt="user"/>
                    </HeaderLink>
                    <HeaderLink >
                        <img src={ShopBskt} alt="user"/>
                    </HeaderLink>
                    </HeaderNav>)
                }
            </Toolbar>
            <HeaderTitle>
                salsa
            </HeaderTitle>
        </AppBar>
    )
};

const HeaderLink = styled(Link)`

`;

const HeaderTitle = styled.h1`
    height: 10rem;
    display: flex;
    justify-content: center; 
`;

const HeaderNav = styled.nav`
    width: 75%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const HeaderMenu = styled.div`
    margin-right: 2rem;
    &:hover{
        cursor: pointer;
    }
`;

export default Header;
