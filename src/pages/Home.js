import React from 'react';

import styled from '@emotion/styled';

import Events from '../components/Events';
import About from '../components/About';
import Guest from '../components/Guest';
import Contact from '../components/Contact';

const Home = () => {
   
    return (
        <>
            <HomeContainer>
                <Events />
                <About />
                <Guest />
                <Contact />
            </HomeContainer>
        </>
    )
};

const HomeContainer = styled.main`
    width:100%;
`;



export default Home;
