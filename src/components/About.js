import styled from "@emotion/styled";
import React from "react";
import { Paper } from "@mui/material";
import SalsaDance from "../assets/salsaDance2.jpg";

const About = () => {
    return (
        <AboutContainer id="about">
            <AboutTitle>A propos</AboutTitle>
            <AboutContent>
                <AboutMain>
                    <H3>Pourquoi apprendre à danser la salsa ?</H3>
                    <AboutMainContent>
                        <AboutMainImg>
                            <Img src={SalsaDance} alt="couple dansant la salsa"/>
                        </AboutMainImg>
                        <p>
                            La salsa est la meilleure chose que vous puissiez faire pour vous-même et un 
                            investissement rentable : <br />
                            La salsa se danse dans le monde entier et vous aide à rencontrer des gens où que vous 
                            soyez ! Imaginons que vous voyagiez maintenant seul dans un pays étranger et que vous 
                            ne connaissiez personne dans la ville où vous venez d’arriver. <br />
                            Si vous avez quelques bases en salsa, ce que vous pouvez faire dès le premier jour est de 
                            rechercher sur Google les clubs et soirées de salsa. De cette façon, vous pourrez 
                            rencontrer des filles et des garçons locaux très rapidement et profiter pleinement de vos 
                            soirées dansantes. <br />
                            Si vous ne dansez pas la Salsa, l’alternative est de vous rendre dans un pub, de vous 
                            saouler et de rencontrer des touristes. <br />
                            La salsa est à la fois un sport et un plaisir que vous pouvez pratiquer n’importe où dans 
                            le monde sans même apporter aucun équipement, aucun équipement de plongée, aucun 
                            équipement de pilotage, rien, rien que vous.
                        </p>
                    </AboutMainContent>
                </AboutMain>
                <AboutMain >
                        <H3>La salsa est amusante</H3>
                        <AboutMainContent>
                            <AboutMainImg>
                                <Img src={SalsaDance} alt="couple dansant la salsa"/>
                            </AboutMainImg>
                            <p>
                            Pendant les cours et les stages de salsa, les élèves sont plus détendues qu’en soirée. 
                            Les gens se rendent à leur cours en général après avoir quitté le travail. Ils sont là 
                            pour se détendre et apprendre en s’amusant.<br/>
                            La salsa est un sport-plaisir<br/>
                            La salsa est un sport qui vous permettra de garder votre ligne et d’avoir une belle 
                            silhouette. Regardez les gens qui dansent quelques heures, et vous verrez comment ils 
                            transpirent. Sans vous rendre compte, vous vous verrez danser la salsa pendant des heures 
                            en soirée. La salsa n’est pas un sport qui demande de la motivation, tout comme la course.
                            </p>
                        </AboutMainContent>
                </AboutMain>
                <AboutMain>
                    
                    <H3>La salsa permet de rencontrer des filles et des garçons</H3>
                    <AboutMainContent>
                        <AboutMainImg>
                            <Img src={SalsaDance} alt="couple dansant la salsa"/>
                        </AboutMainImg>
                        <p>
                            C’est évident, non ?<br/>
                            Vous n’avez pas besoin d’un prétexte pour inviter une fille à danser, c’est une chose 
                            naturelle à faire dans une soirée salsa. De plus, lors des cours de salsa, il sera 
                            naturel de rencontrer des filles et garçons, l’enseignant alternant généralement les 
                            couples afin que vous fassiez connaissance avec beaucoup de monde. En fait, les mêmes 
                            personnes qui participent aux cours de salsa poursuivront pour la majorité pour une 
                            soirée, vous connaîtrez donc déjà certaines personnes. Après un certain temps, vous 
                            connaîtrez beaucoup de monde dans les, de nombreux habitués viennent danser et de 
                            nombreux danseurs viennent occasionnellement.
                        </p>
                    </AboutMainContent>
                </AboutMain>
               
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
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 1200px) {
        width: 90%;
        flex-direction: column;
        align-items: center;
    }
`;

const AboutMain = styled(Paper)`
    width: 100%;
    padding: 2rem;
    margin-bottom: 2rem;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: left;
    @media (max-width: 1200px) {
        width: 100%;
    }
`;

const AboutMainContent = styled.div`
    
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    @media screen and (max-width: 1024px){
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        justify-content: center;
    }
`;

const AboutMainImg = styled.div`
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    padding-top: 1.5rem;
    @media screen and (max-width: 1024px){
        display: none;
    }
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const H3 = styled.h3`
    align-self: center;
`;
export default About;
