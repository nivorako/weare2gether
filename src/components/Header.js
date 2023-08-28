import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Headroom from "react-headroom";

import { setDrawer } from "../features/drawerSlice";
import { setCurrentUser } from "../features/authSlice";

import {
    changeColor,
    changeToolbarColor,
    changeUser,
    changeShopBskt,
    changeMenu,
    changeBoxShadow,
    changeUsernameColor,
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
    Menu,
    MenuItem,
    useMediaQuery,
} from "@mui/material";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import styled from "@emotion/styled";

import img from "../assets/imgTitle.png";
import Close from "../assets/closeBlack.svg";
import Logo from "../assets/Logo.png";
import User from "../assets/user4.svg";
import User1 from "../assets/user3.svg";
import ShopBskt from "../assets/shopBskt.svg";
import ShoppingBskt from "../assets/shoppingBskt.svg";
import MenuBlack from "../assets/menu.svg";
import MenuWhite from "../assets/menuWhite.svg";

// import Parse from "../utils/parseConfig";

import Parse from "parse/dist/parse.min.js";

const APPLICATION_ID = "GXgBEka1jlGx1EbzJcgbtOuv1FP9CnH5GO4ZpYMV";
const HOST_URL = "https://parseapi.back4app.com/";
const JAVASCRIPT_KEY = "3it9PTiIq5GZtqnBkkn8VFJAeJZeOjFditnE6DQM";

Parse.initialize(APPLICATION_ID, JAVASCRIPT_KEY);
Parse.serverURL = HOST_URL;

/**
 *
 * @returns {JSX element} element représentant le Header
 */

const Header = () => {

    const currentUser = Parse.User.current();
    
    const navigate = useNavigate();

    const handleNavigate = (page) => {
        console.log("userRole :", role);
        // { 
        //     page === "Blog" ? navigate("/Blog") 
        //     : role === null ?  navigate("/Connexion")
        //     : navigate("/");
        // }

        if (page === "Blog") {
            navigate("/Blog");
        } else if (currentUser) {
            const role = currentUser.get("role");
            if (role === null) {
                navigate("/Connexion");
            } else {
                navigate("/");
            }
        } else {
            navigate("/Connexion");
        }
    };

    const [role, setRole] = useState(null);
    useEffect(() => {
        if(currentUser){
            const userRole = currentUser.get("role");
            setRole(userRole);
        }
    }, [currentUser]);
    
    const activePage = useSelector((state) => state.page.activePage);

    const currentUserName = useSelector(
        (state) => state.auth.currentUser.username,
    );

    const toolbarBGColor = useSelector(
        (state) => state.toolbar.backgroundColor,
    );

    const toolbarColor = useSelector((state) => state.toolbar.color);

    const userColor = useSelector((state) => state.toolbar.user);

    const shopBsktColor = useSelector((state) => state.toolbar.shopBskt);

    const menuColor = useSelector((state) => state.toolbar.menu);

    const boxShadowColor = useSelector((state) => state.toolbar.boxShadow);

    const usernameColor = useSelector((state) => state.toolbar.usernameColor);

    const drawer = useSelector((state) => state.drawer);

    const [menuAnchor, setMenuAnchor] = useState(null);
    // underline color of headerNavItem when scrolling TODO
    const [underlineColor, setUnderlineColor] = useState("white");

    const dispatch = useDispatch();

    const isMobile = useMediaQuery("(max-width:768px)", { noSsr: true });

    const toggleDrawer = () => {
        dispatch(setDrawer());
    };

    const handleMenuOpen = (event) => {
        setMenuAnchor(event.currentTarget);
    };

    const handleMenuClose = () => {
        setMenuAnchor(null);
    };

    const handleLogOut = async () => {
        try {
            await Parse.User.logOut();
            dispatch(setCurrentUser({ username: "", id: "" }));
            alert("vous etes déconnecté");
            return true;
        } catch (error) {
            if (error && error.message) {
                alert(`Error! ${error.message}`);
            } else {
                alert("An error occurred.");
            }
            return false;
        }
    };

    const handleLogOutAndClose = () => {
        handleMenuClose();
        handleLogOut();
    };

    const handleLogOutCloseToggle = () => {
        handleMenuClose();
        handleLogOut();
        toggleDrawer();
    };

    const setToolbarWhite = () => {
        setUnderlineColor("black");
        dispatch(changeToolbarColor("white"));
        dispatch(changeColor("var(--black)"));
        dispatch(changeShopBskt(ShoppingBskt));
        dispatch(changeUser(User1));
        dispatch(changeMenu(MenuBlack));
        dispatch(changeBoxShadow("lightgrey"));
        dispatch(changeUsernameColor("var(--black)"));
    };

    const setToolbarPrimary = () => {
        setUnderlineColor("white");
        dispatch(changeToolbarColor("var(--primary)"));
        dispatch(changeColor("white"));
        dispatch(changeShopBskt(ShopBskt));
        dispatch(changeUser(User));
        dispatch(changeMenu(MenuWhite));
        dispatch(changeBoxShadow("var(--primary)"));
        dispatch(changeUsernameColor("white"));
    };

    const handleScroll = () => {
        const aboutSection = document.getElementById("about");
        const guestSection = document.getElementById("guest");
        const connexSection = document.getElementById("connexion");
        const blogSection = document.getElementById("blog");
        const scrollY = window.scrollY;

        if (aboutSection) {
            const aboutSectionOffset = aboutSection.offsetTop;
            if (scrollY >= aboutSectionOffset) {
                setToolbarWhite();
            } else {
                setToolbarPrimary();
            }
        }

        if (guestSection) {
            const guestSectionOffset = guestSection.offsetTop;
            if (scrollY >= guestSectionOffset) {
                setToolbarPrimary();
            }
        }

        if (connexSection) {
            setToolbarPrimary();
        }

        if (blogSection) {
            const blogSectionOffset = blogSection.offsetTop;
            if (blogSectionOffset <= scrollY) {
                setToolbarWhite();
            } else {
                setToolbarPrimary();
            }
        }
    };

    useEffect(() => {
        const scrollEventListener = () => handleScroll();
        window.addEventListener("scroll", scrollEventListener);

        return () => {
            window.removeEventListener("scroll", scrollEventListener);
        };
    }, []);

    return (
        <>
            <CssBaseline />
            <HeaderContainer>
                <AppBar
                    sx={{
                        position: "static",
                        backgroundColor: "var(--primary)",
                        height: "600px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "start",
                        opacity: "1",
                    }}
                >
                    <Headroom>
                        <Toolbar
                            sx={{
                                position: "relative",
                                width: "100%",
                                margin: "auto",
                                padding: "2rem",
                                display: "flex",
                                justifyContent: "center",
                                boxShadow: `0 .5px .5px ${boxShadowColor}`,
                                backgroundColor: toolbarBGColor,
                                zIndex: "100",
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
                                        {currentUserName ? (
                                            <Typography
                                                sx={{
                                                    color: usernameColor,
                                                    marginTop: "2rem",
                                                }}
                                                composant="p"
                                                variant="body2"
                                            >
                                                Bonjour {currentUserName}
                                            </Typography>
                                        ) : null}
                                    </HeaderMenu>
                                    <Drawer
                                        // onClick={toggleDrawer}
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
                                            <Box
                                                sx={{
                                                    position: "relative",
                                                    width: "100%",
                                                    display: "flex",
                                                    justifyContent:
                                                        "space-between",
                                                }}
                                            >
                                                {currentUserName ? (
                                                    <Typography
                                                        sx={{
                                                            marginLeft: "1rem",
                                                            color: "var(--black)",
                                                        }}
                                                    >
                                                        Bonjour{" "}
                                                        {currentUserName}
                                                    </Typography>
                                                ) : null}
                                                <MenuClose
                                                    onClick={toggleDrawer}
                                                >
                                                    <img
                                                        src={Close}
                                                        alt="close drawer"
                                                    />
                                                </MenuClose>
                                            </Box>
                                            <Divider />

                                            <HeaderLink to="/Blog">
                                                <HeaderMenuItem
                                                    onClick={toggleDrawer}
                                                >
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

                                            <HeaderLink to="/">
                                                <HeaderMenuItem
                                                    onClick={toggleDrawer}
                                                >
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
                                                <HeaderMenuItem
                                                    onClick={handleMenuOpen}
                                                >
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
                                                    {menuAnchor ? (
                                                        <ExpandMoreIcon
                                                            sx={{
                                                                marginLeft:
                                                                    "2rem",
                                                                color: "var(--black)",
                                                            }}
                                                        />
                                                    ) : (
                                                        <ExpandLessIcon
                                                            sx={{
                                                                marginLeft:
                                                                    "2rem",
                                                                color: "var(--black)",
                                                            }}
                                                        />
                                                    )}
                                                </HeaderMenuItem>
                                            </HeaderLink>
                                            <Menu
                                                anchorEl={menuAnchor}
                                                open={Boolean(menuAnchor)}
                                                onClose={handleMenuClose}
                                                onMouseLeave={handleMenuClose}
                                            >
                                                <MenuItem
                                                    onClick={handleMenuClose}
                                                >
                                                    Profil
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={
                                                        handleLogOutCloseToggle
                                                    }
                                                >
                                                    Déconnexion
                                                </MenuItem>
                                            </Menu>
                                            <Divider />

                                            {/* <HeaderLink>
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
                                                <Divider /> */}
                                        </Box>
                                    </Drawer>
                                </>
                            ) : (
                                <HeaderNav>
                                    <Box 
                                        onClick={() => handleNavigate("Blog")}
                                    >
                                        <HeaderNavItem>
                                            <Button
                                                variant="text"
                                                sx={{ color: toolbarColor }}
                                            >
                                                BLOG
                                            </Button>
                                        </HeaderNavItem>
                                    </Box>
                                    <Box 
                                        onClick={() => handleNavigate("Connexion")}
                                    >
                                        <HeaderNavItem>
                                            <Button
                                                variant="text"
                                                sx={{ color: toolbarColor }}
                                            >
                                                CONNEXION
                                            </Button>
                                        </HeaderNavItem>
                                    </Box>
                                    <Box
                                        sx={{
                                            ":hover":{
                                                cursor: "pointer"
                                            }
                                        }}
                                    >
                                        <HeaderNavItem onClick={handleMenuOpen}>
                                            <img src={userColor} alt="user" />
                                            {menuAnchor ? (
                                                <ExpandMoreIcon
                                                    sx={{
                                                        marginLeft: "2rem",
                                                        color: "white",
                                                    }}
                                                />
                                            ) : (
                                                <ExpandLessIcon
                                                    sx={{
                                                        marginLeft: "2rem",
                                                        color: "white",
                                                    }}
                                                />
                                            )}
                                        </HeaderNavItem>
                                        <Menu
                                            anchorEl={menuAnchor}
                                            open={Boolean(menuAnchor)}
                                            onClose={handleMenuClose}
                                            onMouseLeave={handleMenuClose}
                                        >
                                            <MenuItem onClick={handleMenuClose}>
                                                Profil
                                            </MenuItem>
                                            <MenuItem
                                                onClick={handleLogOutAndClose}
                                            >
                                                Déconnexion
                                            </MenuItem>
                                        </Menu>
                                    </Box>
                                    {/* <HeaderLink>
                                            <HeaderNavItem>
                                                <img
                                                    src={shopBsktColor}
                                                    alt="shopping basket"
                                                />
                                            </HeaderNavItem>
                                        </HeaderLink> */}
                                    {currentUserName && (
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                bottom: "1rem",
                                                right: "5rem",
                                            }}
                                        >
                                            <Typography
                                                component="p"
                                                variant="body2"
                                                sx={{
                                                    opacity: ".8",
                                                    marginLeft: "1rem",
                                                    color: usernameColor,
                                                }}
                                            >
                                                Bonjour {currentUserName}
                                            </Typography>
                                        </Box>
                                    )}
                                </HeaderNav>
                            )}
                        </Toolbar>
                    </Headroom>
                    <HeaderTitle>
                        {activePage === "Connexion" ? (
                            <Title>
                                <h2>Connexion</h2>
                            </Title>
                        ) : activePage === "Blog" ? (
                            <Title>
                                <h2>Blog</h2>
                                <p>Découvrez nos derniers articles de blog</p>
                            </Title>
                        ) : activePage === "Media" ? (
                            <Title>
                                <h2>Media</h2>
                            </Title>
                        ) : activePage === "GuestPost" ? (
                            <Title>
                                <h2>Guest Post</h2>
                            </Title>
                        ) : activePage === "NotFound" ? (
                            <Title>
                                <h2>Page not found ...</h2>
                            </Title>
                        ) : activePage === "signUp" ? (
                            <Title>
                                <h2>Créez votre compte</h2>
                            </Title>
                        ) : activePage === "adminConnexion" ? (
                            <Title>
                                <h2>Connexion administrateur</h2>
                            </Title>
                        )  :   (
                            "Home"
                        )}
                    </HeaderTitle>
                </AppBar>
            </HeaderContainer>
        </>
    );
};

const HeaderContainer = styled.header`
    position: relative;
    width: 100%;
    height: 600px;
    background-image: url(${img});
`;

const HeaderLink = styled(Link)`
    text-decoration: none;
`;

const HeaderTitle = styled.title`
    height: 10rem;
    display: flex;
    justify-content: center;
    margin-top: 4rem;
    font-size: 24px;
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
    transition: 0.5s;
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
    position: absolute;
    right: 0;
    cursor: pointer;
    color: var(--black);
    transition: 0.5s;
    &:hover {
        transform: scale(1.3);
    }
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 1rem;
`;

export default Header;
