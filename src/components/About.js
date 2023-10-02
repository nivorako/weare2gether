import styled from "@emotion/styled";
import React from "react";
import { Paper } from "@mui/material";

const About = () => {
    return (
        <AboutContainer id="about">
            <AboutTitle>A propos</AboutTitle>
            <AboutContent>
                <AboutMain>
                    <h3>A propos</h3>
                    <p>
                        Vous souhaitez apprendre à danser la Salsa, la Bachata,
                        la Kizomba et toutes les danses afro-caribéennes ou
                        passer tout simplement une bonne soirée entre amis dans
                        une ambiance latine ? Vous êtes à la bonne adresse !
                    </p>
                </AboutMain>
                <AboutDetails>
                    <AboutDetail>
                        <h3>notre team</h3>
                        <p>
                            Vous souhaitez apprendre à danser la Salsa, la
                            Bachata, la Kizomba et toutes les danses
                            afro-caribéennes ou passer tout simplement une bonne
                            soirée entre amis dans une ambiance latine ? Vous
                            êtes à la bonne adresse !
                        </p>
                    </AboutDetail>
                    <AboutDetail>
                        <h3>A propos</h3>
                        <p>
                            Vous souhaitez apprendre à danser la Salsa, la
                            Bachata, la Kizomba et toutes les danses
                            afro-caribéennes ou passer tout simplement une bonne
                            soirée entre amis dans une ambiance latine ? Vous
                            êtes à la bonne adresse !
                        </p>
                    </AboutDetail>
                    <AboutDetail>
                        <h3>A propos</h3>
                        <p>
                            Vous souhaitez apprendre à danser la Salsa, la
                            Bachata, la Kizomba et toutes les danses
                            afro-caribéennes ou passer tout simplement une bonne
                            soirée entre amis dans une ambiance latine ? Vous
                            êtes à la bonne adresse !
                        </p>
                    </AboutDetail>
                    <AboutDetail>
                        <h3>A propos</h3>
                        <p>
                            Vous souhaitez apprendre à danser la Salsa, la
                            Bachata, la Kizomba et toutes les danses
                            afro-caribéennes ou passer tout simplement une bonne
                            soirée entre amis dans une ambiance latine ? Vous
                            êtes à la bonne adresse !
                        </p>
                    </AboutDetail>
                </AboutDetails>
            </AboutContent>
        </AboutContainer>
    );
};

const AboutContainer = styled.article`
    width: 100%;
`;

const AboutTitle = styled.h2`
    margin-top: 8rem;
    text-align: center;
    font-family: Lora;
    font-size: 40px;
`;

const AboutContent = styled.div`
    width: 70%;
    margin: 8rem auto;
    display: flex;
    justify-content: space-between;
    @media (max-width: 1200px) {
        width: 90%;
        flex-direction: column;
        align-items: center;
    }
`;

const AboutMain = styled(Paper)`
    width: 48%;
    padding: 1rem;
    font-size: 32px;
    @media (max-width: 1200px) {
        width: 100%;
    }
`;

const AboutDetails = styled.div`
    width: 48%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    @media (max-width: 1200px) {
        width: 100%;
        margin-top: 2rem;
    }
`;

const AboutDetail = styled(Paper)`
    width: 48%;
    padding: 1rem;
    @media (max-width: 1200px) {
        margin-bottom: 2rem;
    }
    @media (max-width: 764px) {
        width: 100%;
    }
`;

export default About;
