import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styled from "@emotion/styled";
import { Box } from "@mui/material";

import arrowLeft from "../assets/arrowLeft.svg";
import arrowRight from "../assets/arrowRight.svg";

import photos from "../data/dataPhoto.json";
import { Scale } from "@mui/icons-material";

const Caroussel = () => {
    const { id } = useParams();

    const selectedPhotos = photos.find((photo) => photo.id === id);

    const fotos = selectedPhotos.pictures;

    const [currentIndex, setCurrentIndex] = useState(1);

    // useEffect(() => {
    //     showSlide(currentIndex);
    // }, [currentIndex]);

    function showSlide(n) {
        setCurrentIndex(n);
    }

    function handleClickLeft(n) {
        const length = fotos.length;

        if (n < length - 1) {
            n++;
            showSlide(n);
        } else if (n === length - 1) {
            showSlide(0);
        }
    }

    function handleClickRight(n) {
        const length = fotos.length;

        if (n < length - 1) {
            n++;
            showSlide(n);
        } else if (n === length - 1) showSlide(0);
    }

    return (
        <CarousselContainer>
            <CarousselBox>
                <CarousselItems className="carousselItems">
                    {fotos.map((foto, index) => (
                        <CarousselItem
                            className="carousselItem"
                            key={index}
                            style={{
                                display:
                                    index === currentIndex ? "block" : "none",
                            }}
                        >
                            <img
                                src={foto}
                                alt="test"
                                style={{
                                    objectFit: "cover",
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                            <Box
                                onClick={() => handleClickLeft(index)}
                                sx={{
                                    width: "25px",
                                    position: "absolute",
                                    top: "50%",
                                    left: "5%",
                                    transform: "scale(3)",
                                    transition: ".5s",
                                    cursor: "pointer",
                                    "&:hover": {
                                        transform: "scale(3.3)",
                                    },
                                }}
                            >
                                <img
                                    src={arrowLeft}
                                    alt="left arrow"
                                    width="100%"
                                />
                            </Box>
                            <Box
                                onClick={() => handleClickRight(index)}
                                sx={{
                                    position: "absolute",
                                    top: "50%",
                                    right: "5%",
                                    transform: "scale(3)",
                                    transition: ".5s",
                                    cursor: "pointer",
                                    "&:hover": {
                                        transform: "scale(3.3)",
                                    },
                                }}
                            >
                                <img src={arrowRight} alt="Right arrow" />
                            </Box>
                        </CarousselItem>
                    ))}
                </CarousselItems>
            </CarousselBox>
        </CarousselContainer>
    );
};

const CarousselContainer = styled.main`
    width: 100%;
    min-height: 75vh;
`;

const CarousselBox = styled.article`
    width: 100%;
    height: 100%;
`;

const CarousselItems = styled.ul`
    position: relative;
    width: 70%;
    height: 100%;
    margin: 2rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 0;
    @media (max-width: 764px) {
        width: 100%;
    }
`;

const CarousselItem = styled.li`
    width: 100%;
    height: 100%;
    list-style-type: none;
`;

export default Caroussel;
