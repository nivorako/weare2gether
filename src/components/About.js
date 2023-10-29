import styled from "@emotion/styled";
import React from "react";
import { Paper } from "@mui/material";

const About = () => {
    return (
        <AboutContainer id="about">
            <AboutTitle>A propos</AboutTitle>
            <AboutContent>
                <AboutMain>
                    <h3>Pourquoi apprendre à danser la salsa ?</h3>
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
                </AboutMain>
                <AboutDetails>
                    <AboutDetail>
                        <h3>La salsa est amusante</h3>
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
                    </AboutDetail>
                    <AboutDetail>
                        <h3>La salsa permet de rencontrer des filles et des garçons</h3>
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
