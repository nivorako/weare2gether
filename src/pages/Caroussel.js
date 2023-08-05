import React from 'react';
import { useParams } from 'react-router-dom';

import styled from '@emotion/styled';

import photos from "../data/dataPhoto.json";

const Caroussel = () => {
    const {id} = useParams();
    
    const selectedPhoto = photos.find(photo => photo.id === id);

    return (
        <CarousselContainer>
            <CarousselBox>
                <CarousselItems>
                    <CarousselItem>
                        <img src={selectedPhoto.cover} alt="test" style={{objectFit:"cover", width:"100%", height:"100%"}} />
                    </CarousselItem>
                </CarousselItems>
            </CarousselBox>
        </CarousselContainer>
    )
};

const CarousselContainer = styled.main`
    width: 100%;
    height: 100vh;
`;

const CarousselBox = styled.article`
    width: 100%;
    height: 100%;
`;

const CarousselItems = styled.ul`
    width: 50%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CarousselItem = styled.li`
    width: 100%;
    height: 50%;
    list-style-type: none;
`;

export default Caroussel
