import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { 
    Box,
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardHeader,
    Typography,
    Button
} from "@mui/material";

import { setFilter } from '../../features/blogFilterSlice';

import { setSelectedCard } from '../../features/blogCardSlice';

import BlogFilter from '../../components/BlogFilter';

import CustomBtn from '../../components/CustomBtn';

import Parse from "parse/dist/parse.min.js";

const APPLICATION_ID = "GXgBEka1jlGx1EbzJcgbtOuv1FP9CnH5GO4ZpYMV";
const HOST_URL = "https://parseapi.back4app.com/";
const JAVASCRIPT_KEY = "3it9PTiIq5GZtqnBkkn8VFJAeJZeOjFditnE6DQM";

Parse.initialize(APPLICATION_ID, JAVASCRIPT_KEY);
Parse.serverURL = HOST_URL;

const DeleteBlog = () => {

    const blogFilter = useSelector((state) => state.blogFilter);
    
    console.log("blogfliter :", blogFilter);
    const [currentBlog, setCurrentBlog] = useState([])

    useEffect(() => {
        const blog = new Parse.Query("Blog");
        blog
            .find()
            .then((res) => {
                setCurrentBlog(res);
            })
            .catch((error) => {
                console.error("error :", error);
            })
    }, []);

    const selectedBlog = currentBlog.filter(blog => blog.get("category") === blogFilter.filter)
    console.log("selected blog: ", selectedBlog);
    const [isConfirmationOpen, setConfirmationOpen] = useState(false);
    const [blogId, setBlogId] = useState("");

    const handleBtnClick = (id) => {
        setConfirmationOpen(true)
        setBlogId(id)
    }

    const handleConfirmClick = async () => {
        const query = new Parse.Query('Blog');
        try {
            const object = await query.get(blogId);
            try {
                    const response = await object.destroy();
                   alert('Blog supprimé :', response);
                } catch (error) {
                    console.error('Error while deleting ParseObject', error);
                }
        } catch (error) {
            console.error('Error while retrieving ParseObject', error);
        }
        setBlogId("");
       
        setConfirmationOpen(false);
    };
    
      const handleReturnClick = () => {
        setBlogId("");
        setConfirmationOpen(false);
    };

    const formatDate = (date) => {
        const formattedDate = new Date(date);
        const mois = formattedDate.toLocaleString('default', { month: 'short' });
        const jour = formattedDate.getDate();
        const annee = formattedDate.getFullYear();
        return `${mois} ${jour} ${annee}`;
    };
   
    return (
        <BlogMainContainer>
            <BlogBox>
                <Typography component="h2" variant="h3" sx={{marginBottom: "8rem"}}>
                    Ici vous pouvez modifier les blogs :
                </Typography>
                <BlogFilter />
               
                    <Grid
                        container
                        spacing={2}
                        sx={{
                            marginTop: "2rem",
                        }}
                    >
                        
                        { 
                            selectedBlog.length !== 0 
                            ? 
                            selectedBlog.map((blog) => {
                                return (
                                        <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            md={4}
                                            key={blog.id}
                                            sx={{
                                                position: "relative"
                                            }}
                                        >
                                            <Card
                                                
                                                sx={{
                                                    position: "relative",
                                                    cursor: "pointer",
                                                    transition: ".5s",
                                                    "&:hover": {
                                                        transform: "scale(1.02)",
                                                        boxShadow:
                                                            "1px 1px 5px grey",
                                                    },
                                                    "&:hover div": {
                                                        opacity: "1"
                                                    }
                                                }}
                                            >
                                                <CardHeader
                                                    title={blog.get("category")}
                                                    subheader={formatDate(blog.get("createdAt"))}
                                                    sx={{display:"flex"}}
                                                />
                                                <CardMedia
                                                    component="img"
                                                    image={blog.get("cover").url()}
                                                    alt="image test"
                                                    style={{
                                                        height: "300px",
                                                        objectFit: "cover",
                                                    }}
                                                />
                                                <CardContent>
                                                    <Typography
                                                        variant="body2"
                                                        color="text.secondary"
                                                    >
                                                        {blog.date}
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        color="text.secondary"
                                                        component="h2"
                                                    >
                                                        {blog.get("title")}
                                                    </Typography>
                                                </CardContent>
                                                <PopUp>
                                                    <CustomBtn 
                                                        onClick={() => handleBtnClick(blog.id)}
                                                        children="Supprimer ce blog"
                                                    />
                                                    <CustomBtn 
                                                        children="Modifier ce blog"
                                                    />
                                                </PopUp>
                                            </Card>
                                            
                                        </Grid>
                                    );
                                }
                            )
                            :
                            currentBlog.map((blog) => {
                                return (
                                    <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            md={4}
                                            key={blog.id}
                                            sx={{
                                                position: "relative"
                                            }}
                                        >
                                            <Card
                                                
                                                sx={{
                                                    position: "relative",
                                                    cursor: "pointer",
                                                    transition: ".5s",
                                                    "&:hover": {
                                                        transform: "scale(1.02)",
                                                        boxShadow:
                                                            "1px 1px 5px grey",
                                                    },
                                                    "&:hover div": {
                                                        opacity: "1"
                                                    }
                                                }}
                                            >
                                                <CardHeader
                                                    title={blog.get("category")}
                                                    subheader={formatDate(blog.get("createdAt"))}
                                                    sx={{display:"flex"}}
                                                />
                                                <CardMedia
                                                    component="img"
                                                    image={blog.get("cover").url()}
                                                    alt="image test"
                                                    style={{
                                                        height: "300px",
                                                        objectFit: "cover",
                                                    }}
                                                />
                                                <CardContent>
                                                    <Typography
                                                        variant="body2"
                                                        color="text.secondary"
                                                    >
                                                        {blog.date}
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        color="text.secondary"
                                                        component="h2"
                                                    >
                                                        {blog.get("title")}
                                                    </Typography>
                                                </CardContent>
                                                <PopUp>
                                                    <CustomBtn 
                                                        onClick={() => handleBtnClick(blog.id)}
                                                        children="Supprimer ce blog"
                                                    />
                                                    <CustomBtn 
                                                        children="Modifier ce blog"
                                                    />
                                                </PopUp>
                                            </Card>
                                            
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                    
                <PopupBackground isOpen={isConfirmationOpen}/>
                <ConfirmPopup isOpen={isConfirmationOpen}>
                    <Typography>Voulez-vous vraiment supprimer ce blog ?</Typography>
                    <Box
                        sx={{
                            width: "100%",
                            display:"flex",
                            justifyContent: "space-between"
                        }}
                    >
                        <Button onClick={handleConfirmClick}>Confirmer</Button>
                        <Button onClick={handleReturnClick}>Retour</Button>
                    </Box>
                </ConfirmPopup>
            </BlogBox>
        </BlogMainContainer>
    )
};

const BlogMainContainer = styled.main`
   width: 100vw;
`;

const BlogBox = styled.div`
    position: relative;
    width: 80%;
    margin: 4rem auto;
    @media (max-width: 400px) {
        width: 90%;
    }
`;

const PopUp = styled.div`
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: .5s;
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ConfirmPopup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

const PopupBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Fond obscurci semi-transparent */
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

export default DeleteBlog
