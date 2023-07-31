import React, { useEffect, useState } from 'react';

import { Box, Button } from '@mui/material';
import styled from '@emotion/styled';

import ImgTitle from "../assets/imgTitle.png";
import Event from '../components/Event';
import About from '../components/About';

const Home = () => {

    return (
        <>
            <HomeContainer>
                <EventContainer>   
                    <EventBox>
                        
                        <EventTitle>
                            <img src={ImgTitle} alt="titre" style={{width:"100%", height:"80vh", objectFit:"cover", borderRadius:"0"}} />
                            <Box
                                sx={{
                                    position: "absolute",
                                    top:"0",
                                    left:"0",
                                    width: "100%",
                                    height: "100%",
                                    display:"flex",
                                    flexDirection:"column",
                                    justifyContent:"space-evenly",
                                    alignItems:"center",
                                    textAlign: "center"
                                }}
                            >
                                <Box>
                                    <Title> 
                                        Weare2gether,
                                    </Title>
                                    <Desc> 
                                        c'est plus que de la musique
                                    </Desc>
                                </Box>
                                
                                <Btn>Photos / Videos</Btn>
                                
                            </Box>
                        </EventTitle>
                        <EventsAd>Les soirées à venir</EventsAd>
                        <Events>
                            <Event/>
                            <Event/>
                            <Event/>
                        </Events>
                        
                    </EventBox>   
                </EventContainer>
                <About />
            </HomeContainer>
        </>
    )
};

const HomeContainer = styled.main`
    width:100%;
`;

const EventContainer = styled.div`
    width:100%;
    background-color: var(--secondary);
`;

const EventBox = styled.div`
    width:70%;
    margin: -250px auto 0 auto;
    border-radius: 1rem 1rem 0 0;
    background-color: var(--secondary);
    z-Index: 10;
    @media (max-width: 764px) {
        width: 100%;
      }
`;

const EventTitle = styled.div`
    position: relative;
    width:100%
`;

const Title = styled.h1`
    color:white;
    width:100%;
    font-size: 48px;
    font-weight:bold;
    font-family:Lora;
    @media (max-width: 450px) {
        margin: 0 1rem 0 1rem;
      }
`;

const Desc = styled.h1`
    color:white;
    width:100%;
    font-size: 32px;
    font-weight:bold;
    font-family:Lora;
    @media (max-width: 450px) {
        margin: 0 1rem 0 1rem;
      }
`;

const Events = styled.section`
    width:100%;
    max-height: 100vh;
    overflow-y: auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

const EventsAd = styled.h2`
   text-align: center;
   font-family:Lora;
   font-size: 32px;
   color: white;
`;

const Btn = styled(Button)({
    color:"white",
    backgroundColor:"var(--secondary)",
    opacity:".8",
    "&:hover":{
        backgroundColor:"var(--secondary)",
        opacity:"1"
    }
});

export default Home;
