import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Headroom from "react-headroom";

import { setDrawer } from "../features/drawerSlice";

import { AppBar, Toolbar, Button, Drawer, Box, Divider, CssBaseline, Typography,  Slide } from "@mui/material";
import styled from '@emotion/styled'
import { useMediaQuery } from '@mui/material';

import Close from "../assets/closeBlack.svg";
import Logo from "../assets/Logo.png";
import User from "../assets/user4.svg";
import User1 from "../assets/user3.svg"
import ShopBskt from "../assets/shopBskt.svg";
import ShoppingBskt from "../assets/shoppingBskt.svg"
import Menu from "../assets/menuWhite.svg";

// function HideOnScroll(props){
//     const {windows, children } = props;
//     const trigger = useScrollTrigger({
//         target: windows ? windows() : undefined
//     })
//     return(
//         <Slide appear={false} direction="down" in={!trigger}>
//             {children}
//         </Slide>
//     )
// }


/**
 * 
 * @returns {JSX element} element représentant le Header
 */

const Header = () => {

    const activePage = useSelector(state => state.page.activePage);

    const dispatch = useDispatch();

    const isMobile = useMediaQuery("(max-width:768px)",  {noSsr: true}); 

    const drawer = useSelector(state => state.drawer);

    const toggleDrawer = () => {
        dispatch(setDrawer());  
    };

    return (
        <>
            <CssBaseline />           
            <HeaderContainer>
                <AppBar 
                    sx={{
                        position:"static",
                        backgroundColor:"var(--primary)",
                        height:"400px",
                        display:"flex",
                        flexDirection:"column",
                        justifyContent: "space-between", 
                    }}
                >
                    <Headroom>
                        
                            <Toolbar 
                                sx={{
                                    width:"100%",
                                    margin: "auto",
                                    padding: "2rem",
                                    display:"flex",
                                    justifyContent:"center",
                                    backgroundColor:"var(--primary)",
                                    "@media(max-width: 764px)":{
                                        justifyContent:"space-between"
                                    }
                                }}
                            >
                                <HeaderLink to="/">
                                    <LogoBox>
                                        <img src={Logo} alt="logo" />
                                    </LogoBox>
                                </HeaderLink> 
                                {
                                    isMobile ?  (   <>
                                                        <HeaderMenu onClick={toggleDrawer}>
                                                            <MenuIcon>
                                                                <img src={Menu} alt="menu" /> 
                                                            </MenuIcon>
                                                        </HeaderMenu>
                                                        <Drawer
                                                            onClick={toggleDrawer} 
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
                                                                    
                                                                >
                                                                    <img src={Close} alt="close drawer" />
                                                                </MenuClose>
                                                                <Divider />

                                                                <HeaderLink to="/Blog">
                                                                    <HeaderMenuItem>
                                                                        <Button variant="text" sx={{color:"var(--black)"}} >BLOG</Button>
                                                                    </HeaderMenuItem>
                                                                </HeaderLink>
                                                                <Divider />

                                                                <HeaderLink to="/Connexion">
                                                                    <HeaderMenuItem>
                                                                        <Button variant="text" sx={{color:"var(--black)"}} >CONNEXION</Button>
                                                                    </HeaderMenuItem>
                                                                </HeaderLink>
                                                                <Divider />

                                                                <HeaderLink >
                                                                    <HeaderMenuItem>
                                                                        <img src={User1} alt="user"/>
                                                                        <Typography sx={{marginLeft:"2rem", color:"var(--black)"}}>Votre profil</Typography>
                                                                    </HeaderMenuItem> 
                                                                </HeaderLink>
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
                                (   <HeaderNav >
                                        <HeaderLink to="/Blog">
                                            <HeaderNavItem>
                                                <Button variant="text" sx={{color:"white"}}>BLOG</Button>
                                            </HeaderNavItem>
                                        </HeaderLink>
                                        <HeaderLink to="/Connexion">
                                            <HeaderNavItem>
                                                <Button variant="text" sx={{color:"white"}}>CONNEXION</Button>
                                            </HeaderNavItem>
                                        </HeaderLink>
                                        <HeaderLink >
                                            <HeaderNavItem>
                                                <img src={User} alt="user" color="red"/>
                                            </HeaderNavItem>
                                        </HeaderLink>
                                        <HeaderLink >
                                            <HeaderNavItem>
                                                <img src={ShopBskt} alt="user"/>
                                            </HeaderNavItem>
                                        </HeaderLink>
                                    </HeaderNav>)
                                }
                            </Toolbar>
                        
                    </Headroom>
                    <HeaderTitle>
                        { activePage === "Connexion" ? "Connexion" :
                            (activePage === "Blog" ? "Blog" : "Home")}
                    </HeaderTitle>
                </AppBar>
            </HeaderContainer>
        </>
    )
};

const HeaderContainer = styled.header`
    width:100%;
    height: auto;
    
`;

const HeaderLink = styled(Link)`
    text-decoration: none;
`;

const HeaderTitle = styled.title`
    height: 10rem;
    display: flex;
    justify-content: center; 
`;

const HeaderNav = styled.nav`
    width: 65%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const HeaderMenu = styled.div`
    margin-right: 2rem;
    &:hover{
        cursor: pointer;
    }
`;

const HeaderMenuItem = styled.nav`
    opacity:0.8;
    display: flex;
    transition: .5s;
    &:hover{
        transform: translate(1rem);
    };
`;

const HeaderNavItem = styled.nav`
    position: relative;
    margin-left: 8rem;
    opacity:0.8;
    &::after{
        content: '';
        position: absolute;
        bottom: -3px; /* la hauteur du soulignement */
        left: 0;
        width: 100%;
        height: 2px; /* épaisseur du soulignement */
        background-color: white; /* couleur soulignement */
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
    }
    &:hover::after{
        opacity:1
    }
    &:hover{
        opacity:1;
    }
    @media (max-width: 1024px){
        margin-left: 4rem;
    }
`;

const LogoBox = styled.div`
    opacity:0.8;
    transition: .5s;
    &:hover{
        opacity:1;
    }
`;

const MenuIcon = styled.div`
    transition: .5s;
    &:hover{
        transform: scale(1.3);
    }
`;

const MenuClose = styled.div`
    align-self: flex-end;
    cursor: pointer;
    transition: .5s;
    &:hover{
        transform: scale(1.3);
    }
`;

const PushDown = styled.div`
    height: 400px;
`;

// HideOnScroll.propTypes = {
//     children: PropTypes.element.isRequired,
//     /**
//      * Injected by the documentation to work in an iframe.
//      * You won't need it on your project.
//      */
//     window: PropTypes.func,
//   };
export default Header;
