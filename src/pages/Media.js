import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { setActivePage } from "../features/pageSlice";
import { CardContent, Card, CardMedia } from "@mui/material";

import photos from "../data/dataPhoto.json";

const Media = () => {
    const dispatch = useDispatch();

    // Mettre à jour l'état de la page active lorsque le composant est monté
    useEffect(() => {
        dispatch(setActivePage("Media"));
    }, [dispatch]);

    return (
        <MediaContainer>
            <MediaBox>
                <MediaItems>
                    {photos.map(({ id, cover, pictures }) => (
                        <MediaItem key={id}>
                            <Link
                                to={`/Caroussel/${id}`}
                                sx={{ textDecoration: "none" }}
                            >
                                <Card sx={{ width: "100%", height: "100%" }}>
                                    <CardMedia
                                        component="img"
                                        alt="test"
                                        image={cover}
                                        sx={{ height: "60%" }}
                                    />
                                    <CardContent
                                        sx={{
                                            height: "40%",
                                            fontSize: "10px",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "space-between",
                                            color: "var(--black)",
                                            padding: ".5rem",
                                        }}
                                    >
                                        <Desc>
                                            <p>18 / 11 / 2003</p>
                                            <p>
                                                <span>{pictures.length} </span>{" "}
                                                Photos
                                            </p>
                                        </Desc>
                                        <Desc>
                                            <Adress>
                                                <p>Bar de la gare</p>
                                                <p>2, rue de la gare</p>
                                                <p>95 000 PONTOISE</p>
                                            </Adress>
                                            <p>Auteur : auteur</p>
                                        </Desc>
                                    </CardContent>
                                </Card>
                            </Link>
                        </MediaItem>
                    ))}
                </MediaItems>
            </MediaBox>
        </MediaContainer>
    );
};

const MediaContainer = styled.main`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const MediaBox = styled.article`
    width: 70%;
    margin: 0 auto;
    @media (max-width: 1440px) {
        width: 90%;
    }
`;

const MediaItems = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-left: 0;
`;

const MediaItem = styled.li`
    list-style-type: none;
    width: 30%;
    height: 320px;
    margin: 1rem 1rem 2rem 1rem;
    transition: 0.5s;
    @media (max-width: 1200px) {
        width: 45%;
    }
    @media (max-width: 764px) {
        width: 100%;
    }
    &:hover {
        transform: scale(1.02);
    }
`;

const Desc = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

const Adress = styled.div``;

export default Media;
