import styled from '@emotion/styled';
import React from 'react';
import {Paper} from '@mui/material';

const About = () => {  

    return (
        <AboutContainer id='about'>
            <AboutTitle>A propos</AboutTitle> 
            <AboutContent>
                <AboutMain>
                    <h3>A propos</h3>
                    <p>
                    Vous souhaitez apprendre 
                    à danser la Salsa, la Bachata,
                    la Kizomba et toutes les 
                    danses afro-caribéennes ou 
                    passer tout simplement une
                    bonne soirée entre amis dans 
                    une ambiance latine ? 

                    Vous êtes à la bonne adresse !
                    </p>
                </AboutMain>
                <AboutDetails>
                    <AboutDetail>
                        <h3>A propos</h3>
                        <p>
                        Vous souhaitez apprendre 
                        à danser la Salsa, la Bachata,
                        la Kizomba et toutes les 
                        danses afro-caribéennes ou 
                        passer tout simplement une
                        bonne soirée entre amis dans 
                        une ambiance latine ? 

                        Vous êtes à la bonne adresse !
                        </p>
                    </AboutDetail>
                    <AboutDetail>
                        <h3>A propos</h3>
                        <p>
                        Vous souhaitez apprendre 
                        à danser la Salsa, la Bachata,
                        la Kizomba et toutes les 
                        danses afro-caribéennes ou 
                        passer tout simplement une
                        bonne soirée entre amis dans 
                        une ambiance latine ? 

                        Vous êtes à la bonne adresse !
                        </p>
                    </AboutDetail>
                    <AboutDetail>
                        <h3>A propos</h3>
                        <p>
                        Vous souhaitez apprendre 
                        à danser la Salsa, la Bachata,
                        la Kizomba et toutes les 
                        danses afro-caribéennes ou 
                        passer tout simplement une
                        bonne soirée entre amis dans 
                        une ambiance latine ? 

                        Vous êtes à la bonne adresse !
                        </p>
                    </AboutDetail>
                    <AboutDetail>
                        <h3>A propos</h3>
                        <p>
                        Vous souhaitez apprendre 
                        à danser la Salsa, la Bachata,
                        la Kizomba et toutes les 
                        danses afro-caribéennes ou 
                        passer tout simplement une
                        bonne soirée entre amis dans 
                        une ambiance latine ? 

                        Vous êtes à la bonne adresse !
                        </p>
                    </AboutDetail>
                </AboutDetails>
            </AboutContent>
        </AboutContainer>
    )
}

const AboutContainer = styled.article`
    width: 70%;
    margin: 4rem auto;
    
`;

const AboutTitle = styled.h2`
    text-align: center;
    font-family:Lora;
    font-size: 32px;
`;

const AboutContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const AboutMain = styled(Paper)`
    width: 48%;
    padding: 1rem;
    font-size: 40px;

`;

const AboutDetails = styled.div`
    width: 48%;
   
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
`;

const AboutDetail = styled(Paper)`
    width: 48%;
    padding: 1rem;
    
`;

export default About
