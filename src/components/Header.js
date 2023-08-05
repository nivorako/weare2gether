import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Headroom from "react-headroom";

import { setDrawer } from "../features/drawerSlice";
import {
    changeColor,
    changeToolbarColor,
    changeUser,
    changeShopBskt,
    changeMenu,
    changeBoxShadow,
} from "../features/toolbarSlice";

import {
    AppBar,
    Toolbar,
    Button,
    Drawer,
    Box,
    Divider,
    CssBaseline,
    Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { useMediaQuery } from "@mui/material";

import Close from "../assets/closeBlack.svg";
import Logo from "../assets/Logo.png";
import User from "../assets/user4.svg";
import User1 from "../assets/user3.svg";
import ShopBskt from "../assets/shopBskt.svg";
import ShoppingBskt from "../assets/shoppingBskt.svg";
import Menu from "../assets/menu.svg";
import MenuWhite from "../assets/menuWhite.svg";

/**
 *
 * @returns {JSX element} element représentant le Header
 */

const Header = () => {
    const activePage = useSelector((state) => state.page.activePage);

    const toolbarBGColor = useSelector(
        (state) => state.toolbar.backgroundColor,
    );

    const toolbarColor = useSelector((state) => state.toolbar.color);

    const userColor = useSelector((state) => state.toolbar.user);

    const shopBsktColor = useSelector((state) => state.toolbar.shopBskt);

    const menuColor = useSelector((state) => state.toolbar.menu);

    const boxShadowColor = useSelector((state) => state.toolbar.boxShadow);

    const dispatch = useDispatch();

    const isMobile = useMediaQuery("(max-width:768px)", { noSsr: true });

    const drawer = useSelector((state) => state.drawer);

    // const handleScroll = () => {
    //     const aboutSection = document.getElementById('about');
    //     const guestSection = document.getElementById('guest');

    //     if (aboutSection) {
    //         const aboutSectionOffset = aboutSection.offsetTop;
    //         const scrollY = window.scrollY;
    //         if (scrollY >= aboutSectionOffset) {
    //           // Déclencher l'action pour changer la couleur de la Toolbar
    //           dispatch(changeToolbarColor("white"));
    //           dispatch(changeColor("black"));
    //           dispatch(changeShopBskt(ShoppingBskt));
    //           dispatch(changeUser(User1));
    //           dispatch(changeMenu(Menu));
    //           dispatch(changeBoxShadow("lightgrey"));
    //         } else {
    //           // Réinitialiser la couleur de la Toolbar si nécessaire
    //           dispatch(changeToolbarColor("var(--primary)"));
    //           dispatch(changeColor("white"));
    //           dispatch(changeShopBskt(ShopBskt));
    //           dispatch(changeUser(User));
    //           dispatch(changeMenu(MenuWhite));
    //           dispatch(changeBoxShadow("var(--primary)"));
    //         }
    //     }
    //     if(guestSection){
    //         const guestSectionOffset = guestSection.offsetTop;
    //         const scrollY = window.scrollY;
    //         if(scrollY >= guestSectionOffset){
    //             dispatch(changeToolbarColor("var(--primary)"));
    //             dispatch(changeColor("white"));
    //             dispatch(changeShopBskt(ShopBskt));
    //             dispatch(changeUser(User));
    //             dispatch(changeMenu(MenuWhite));
    //             dispatch(changeBoxShadow("var(--primary)"));
    //         }
    //     }
    // };

    const handleScroll = (
        sectionId,
        color1,
        color2,
        shopBskt,
        user,
        menu,
        boxShadow,
    ) => {
        const section = document.getElementById(sectionId);

        if (section) {
            const sectionOffset = section.offsetTop;
            const scrollY = window.scrollY;

            if (scrollY >= sectionOffset) {
                dispatch(changeToolbarColor(color1));
                dispatch(changeColor(color2));
                dispatch(changeShopBskt(shopBskt));
                dispatch(changeUser(user));
                dispatch(changeMenu(menu));
                dispatch(changeBoxShadow(boxShadow));
            } else {
                dispatch(changeToolbarColor("var(--primary)"));
                dispatch(changeColor("white"));
                dispatch(changeShopBskt(ShopBskt));
                dispatch(changeUser(User));
                dispatch(changeMenu(MenuWhite));
                dispatch(changeBoxShadow("var(--primary)"));
            }
        }
    };

    const addScrollEventListener = () => {
        // handleScroll("home", "var(--primary)", "white", ShopBskt, User, MenuWhite, "var(--primary)");
        handleScroll("about", "white", "black", ShoppingBskt, User1, Menu, "lightgrey");
        handleScroll("guest", "var(--primary)", "white", ShopBskt, User, MenuWhite, "var(--primary)");
        // Ajoutez d'autres appels à handleScroll pour chaque section supplémentaire
    };
    

    useEffect(() => {
        window.addEventListener("scroll", addScrollEventListener);
        return () => {
            window.removeEventListener("scroll", addScrollEventListener);
        };
    }, []);

    const toggleDrawer = () => {
        dispatch(setDrawer());
    };

    return (
        <>
            <CssBaseline />
            <HeaderContainer>
                <AppBar
                    sx={{
                        position: "static",
                        backgroundColor: "var(--primary)",
                        height: "400px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <Headroom>
                        <Toolbar
                            sx={{
                                width: "100%",
                                margin: "auto",
                                padding: "2rem",
                                display: "flex",
                                justifyContent: "center",
                                boxShadow: `0 .5px .5px ${boxShadowColor}`,
                                backgroundColor: toolbarBGColor,
                                "@media(max-width: 764px)": {
                                    justifyContent: "space-between",
                                },
                            }}
                        >
                            <HeaderLink to="/">
                                <LogoBox>
                                    <img src={Logo} alt="logo" />
                                </LogoBox>
                            </HeaderLink>
                            {isMobile ? (
                                <>
                                    <HeaderMenu onClick={toggleDrawer}>
                                        <MenuIcon>
                                            <img src={menuColor} alt="menu" />
                                        </MenuIcon>
                                    </HeaderMenu>
                                    <Drawer
                                        onClick={toggleDrawer}
                                        open={drawer.drawer}
                                        anchor="right"
                                        PaperProps={{
                                            sx: {
                                                width: "100%", // Définir la largeur du drawer à 100%
                                                zIndex: "10", // Placer le drawer au-dessus du reste du contenu
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: "100%",
                                                height: "100%",
                                                padding: "3rem",
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "space-around",
                                            }}
                                        >
                                            <MenuClose>
                                                <img
                                                    src={Close}
                                                    alt="close drawer"
                                                />
                                            </MenuClose>
                                            <Divider />

                                            <HeaderLink to="/Blog">
                                                <HeaderMenuItem>
                                                    <Button
                                                        variant="text"
                                                        sx={{
                                                            color: "var(--black)",
                                                        }}
                                                    >
                                                        BLOG
                                                    </Button>
                                                </HeaderMenuItem>
                                            </HeaderLink>
                                            <Divider />

                                            <HeaderLink to="/Connexion">
                                                <HeaderMenuItem>
                                                    <Button
                                                        variant="text"
                                                        sx={{
                                                            color: "var(--black)",
                                                        }}
                                                    >
                                                        CONNEXION
                                                    </Button>
                                                </HeaderMenuItem>
                                            </HeaderLink>
                                            <Divider />

                                            <HeaderLink>
                                                <HeaderMenuItem>
                                                    <img
                                                        src={User1}
                                                        alt="user"
                                                    />
                                                    <Typography
                                                        sx={{
                                                            marginLeft: "2rem",
                                                            color: "var(--black)",
                                                        }}
                                                    >
                                                        Votre profil
                                                    </Typography>
                                                </HeaderMenuItem>
                                            </HeaderLink>
                                            <Divider />

                                            <HeaderLink>
                                                <HeaderMenuItem>
                                                    <img
                                                        src={ShoppingBskt}
                                                        alt="panier"
                                                    />
                                                    <Typography
                                                        sx={{
                                                            marginLeft: "2rem",
                                                            color: "var(--black)",
                                                        }}
                                                    >
                                                        Votre panier
                                                    </Typography>
                                                </HeaderMenuItem>
                                            </HeaderLink>
                                            <Divider />
                                        </Box>
                                    </Drawer>
                                </>
                            ) : (
                                <HeaderNav>
                                    <HeaderLink to="/Blog">
                                        <HeaderNavItem>
                                            <Button
                                                variant="text"
                                                sx={{ color: toolbarColor }}
                                            >
                                                BLOG
                                            </Button>
                                        </HeaderNavItem>
                                    </HeaderLink>
                                    <HeaderLink to="/Connexion">
                                        <HeaderNavItem>
                                            <Button
                                                variant="text"
                                                sx={{ color: toolbarColor }}
                                            >
                                                CONNEXION
                                            </Button>
                                        </HeaderNavItem>
                                    </HeaderLink>
                                    <HeaderLink>
                                        <HeaderNavItem>
                                            <img src={userColor} alt="user" />
                                        </HeaderNavItem>
                                    </HeaderLink>
                                    <HeaderLink>
                                        <HeaderNavItem>
                                            <img
                                                src={shopBsktColor}
                                                alt="shopping basket"
                                            />
                                        </HeaderNavItem>
                                    </HeaderLink>
                                </HeaderNav>
                            )}
                        </Toolbar>
                    </Headroom>
                    <HeaderTitle>
                        {activePage === "Connexion"
                            ? "Connexion"
                            : activePage === "Blog"
                            ? "Blog"
                            : activePage === "Media"
                            ? "Media"
                            : "Home"}
                    </HeaderTitle>
                </AppBar>
            </HeaderContainer>
        </>
    );
};

const HeaderContainer = styled.header`
    width: 100%;
    height: auto;
    background-color: var(--primary);
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
    &:hover {
        cursor: pointer;
    }
`;

const HeaderMenuItem = styled.nav`
    opacity: 0.8;
    display: flex;
    transition: 0.5s;
    &:hover {
        transform: translate(1rem);
    }
`;

const HeaderNavItem = styled.nav`
    position: relative;
    margin-left: 8rem;
    opacity: 0.8;
    &::after {
        content: "";
        position: absolute;
        bottom: -3px; /* la hauteur du soulignement */
        left: 0;
        width: 100%;
        height: 2px; /* épaisseur du soulignement */
        background-color: white; /* couleur soulignement */
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
    }
    &:hover::after {
        opacity: 1;
    }
    &:hover {
        opacity: 1;
    }
    @media (max-width: 1024px) {
        margin-left: 4rem;
    }
`;

const LogoBox = styled.div`
    opacity: 0.8;
    transition: 0.5s;
    &:hover {
        opacity: 1;
    }
`;

const MenuIcon = styled.div`
    transition: 0.5s;
    &:hover {
        transform: scale(1.3);
    }
`;

const MenuClose = styled.div`
    align-self: flex-end;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
        transform: scale(1.3);
    }
`;

export default Header;
