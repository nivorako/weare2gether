import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setDrawer } from "../features/drawerSlice";

import { AppBar, Toolbar, Button, Drawer, Box, Divider, CssBaseline, Typography } from "@mui/material";
import styled from '@emotion/styled'
import { useMediaQuery } from '@mui/material';

import Close from "../assets/closeBlack.svg";
import Logo from "../assets/Logo.png";
import User from "../assets/user4.svg";
import User1 from "../assets/user3.svg"
import ShopBskt from "../assets/shopBskt.svg";
import ShoppingBskt from "../assets/shoppingBskt.svg"
import Menu from "../assets/menuWhite.svg";

/**
 * 
 * @returns {JSX element} element représentant le Header
 */

const Header = () => {

    const dispatch = useDispatch();

    const isMobile = useMediaQuery("(max-width:768px)",  {noSsr: true}); 

    const drawer = useSelector(state => state.drawer);

    const toggleDrawer = () => {
        dispatch(setDrawer());  
    };

    const test = () => {
        console.log("okok");
    }

    return (
        <>
            <CssBaseline />
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
                        isMobile ?  (   <>
                                            <HeaderMenu onClick={toggleDrawer}>
                                                <img src={Menu} alt="menu" /> 
                                            </HeaderMenu>
                                            <Drawer 
                                                open={drawer.drawer}  
                                                anchor="right"
                                                PaperProps={{
                                                    sx: {
                                                      width: "100%",  // Définir la largeur du drawer à 100%
                                                      zIndex: "10", // Placer le drawer au-dessus du reste du contenu
                                                    }
                                                  }}
                                            >
                                                <Box 
                                                    sx={{                                                      
                                                        width:"100%",
                                                        height:"100%",
                                                        padding:"3rem",
                                                        display:"flex",
                                                        flexDirection:"column",
                                                        justifyContent:"space-around"
                                                    }}
                                                >
                                                    <MenuClose 
                                                        onClick={toggleDrawer}
                                                    >
                                                        <img src={Close} alt="close drawer" />
                                                    </MenuClose>
                                                    <Divider />
                                                    <HeaderLink >
                                                        <HeaderMenuItem>
                                                            <Button variant="text" sx={{color:"var(--black)"}} onClick={test}>BLOG</Button>
                                                        </HeaderMenuItem>
                                                    </HeaderLink>
                                                    <Divider />
                                                    <HeaderLink >
                                                        <HeaderMenuItem>
                                                            <Button variant="text" sx={{color:"var(--black)"}} onClick={test}>CONNEXION</Button>
                                                        </HeaderMenuItem>
                                                    </HeaderLink>
                                                    <Divider />
                                                    <HeaderLink >
                                                        <HeaderMenuItem>
                                                            <img src={User1} alt="user"/>
                                                            <Typography sx={{marginLeft:"2rem", color:"var(--black)"}}>Votre profil</Typography>
                                                        </HeaderMenuItem>                                                                                                           </HeaderLink>
                                                    <Divider />
                                                    <HeaderLink >
                                                        <HeaderMenuItem>
                                                            <img src={ShoppingBskt} alt="panier"/>
                                                            <Typography sx={{marginLeft:"2rem", color:"var(--black)"}}>Votre panier</Typography>
                                                        </HeaderMenuItem>                                                   
                                                    </HeaderLink>
                                                    <Divider />
                                                </Box>
                                            </Drawer>
                                        </>
                                    ) 
                                :
                    ( <HeaderNav >
                        <HeaderLink >
                            <Button variant="text" sx={{color:"white"}}>BLOG</Button>
                        </HeaderLink>
                        <HeaderLink >
                            <Button variant="text" sx={{color:"white"}}>CONNEXION</Button>
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
        </>
    )
};

const HeaderLink = styled(Link)`
    text-decoration: none;
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

const HeaderMenuItem = styled.nav`
    display: flex;
    transition: .5s;
    &:hover{
        transform: translate(1rem);
    };
`;

const MenuClose = styled.div`
    align-self: flex-end;
    cursor: pointer;
    transition: .5s;
    &:hover{
        transform: scale(1.3);
    }
`;
export default Header;
