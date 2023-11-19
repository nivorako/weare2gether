
import React, {useState} from "react";

import styled from "@emotion/styled";

import Collapse from "./Collapse";
import SalsaDance from "../assets/salsaDance2.jpg";

const About = () => {

    const aboutContent = [
        {
            title: "Pourquoi apprendre à danser la salsa ?",
            img: SalsaDance,
            alt: "couple dansant la salsa",
            texte: [
                'Pendant les cours et les stages de salsa, les élèves sont plus détendues qu’en soirée.',
                'Les gens se rendent à leur cours en général après avoir quitté le travail. Ils sont là pour se détendre et apprendre en s’amusant.',             
                'La salsa est un sport-plaisir qui vous permettra de garder votre ligne et d’avoir une belle silhouette. Regardez les gens qui dansent quelques heures, et vous verrez comment ils transpirent. Sans vous rendre compte, vous vous verrez danser la salsa pendant des heures en soirée. La salsa n’est pas un sport qui demande de la motivation, tout comme la course.',           
              ]
        },
        {
            title: "La salsa est amusante",
            img: SalsaDance,
            alt: "couple dansant la salsa",
            texte: [
                'Pendant les cours et les stages de salsa, les élèves sont plus détendues qu’en soirée.',
                'Les gens se rendent à leur cours en général après avoir quitté le travail. Ils sont là pour se détendre et apprendre en s’amusant.',
                'La salsa est un sport-plaisir',
                'La salsa est un sport qui vous permettra de garder votre ligne et d’avoir une belle silhouette. Regardez les gens qui dansent quelques heures, et vous verrez comment ils transpirent. Sans vous rendre compte, vous vous verrez danser la salsa pendant des heures en soirée. La salsa n’est pas un sport qui demande de la motivation, tout comme la course.', 
              ]
        },
        {
            title: "La salsa permet de rencontrer des filles et des garçons",
            img: SalsaDance,
            alt: "couple dansant la salsa",
            texte: [
                'C’est évident, non ?',
                'Vous n’avez pas besoin d’un prétexte pour inviter une fille à danser, c’est une chose naturelle à faire dans une soirée salsa. De plus, lors des cours de salsa, il sera  naturel de rencontrer des filles et garçons, l’enseignant alternant généralement les couples afin que vous fassiez connaissance avec beaucoup de monde.',
                " En fait, les mêmes  personnes qui participent aux cours de salsa poursuivront pour la majorité pour une soirée, vous connaîtrez donc déjà certaines personnes. Après un certain temps, vous connaîtrez beaucoup de monde, de nombreux habitués viennent danser et de nombreux danseurs viennent occasionnellement."
            ]
        },
        {
            title: "Pourquoi apprendre à danser la salsa ?",
            img: SalsaDance,
            alt: "couple dansant la salsa",
            texte: [
                'Pendant les cours et les stages de salsa, les élèves sont plus détendues qu’en soirée.',
                'Les gens se rendent à leur cours en général après avoir quitté le travail. Ils sont là pour se détendre et apprendre en s’amusant.',             
                'La salsa est un sport-plaisir qui vous permettra de garder votre ligne et d’avoir une belle silhouette. Regardez les gens qui dansent quelques heures, et vous verrez comment ils transpirent. Sans vous rendre compte, vous vous verrez danser la salsa pendant des heures en soirée. La salsa n’est pas un sport qui demande de la motivation, tout comme la course.',           
              ]
        },
        {
            title: "La salsa est amusante",
            img: SalsaDance,
            alt: "couple dansant la salsa",
            texte: [
                'Pendant les cours et les stages de salsa, les élèves sont plus détendues qu’en soirée.',
                'Les gens se rendent à leur cours en général après avoir quitté le travail. Ils sont là',
                'pour se détendre et apprendre en s’amusant.',
                'La salsa est un sport-plaisir',
                'La salsa est un sport qui vous permettra de garder votre ligne et d’avoir une belle',
                'silhouette. Regardez les gens qui dansent quelques heures, et vous verrez comment ils',
                'transpirent. Sans vous rendre compte, vous vous verrez danser la salsa pendant des heures',
                'en soirée. La salsa n’est pas un sport qui demande de la motivation, tout comme la course.',
              ]
        },
        {
            title: "La salsa permet de rencontrer des filles et des garçons",
            img: SalsaDance,
            alt: "couple dansant la salsa",
            texte: [
                'C’est évident, non ?',
                'Vous n’avez pas besoin d’un prétexte pour inviter une fille à danser, c’est une chose naturelle à faire dans une soirée salsa. De plus, lors des cours de salsa, il sera  naturel de rencontrer des filles et garçons, l’enseignant alternant généralement les couples afin que vous fassiez connaissance avec beaucoup de monde.',
                " En fait, les mêmes  personnes qui participent aux cours de salsa poursuivront pour la majorité pour une soirée, vous connaîtrez donc déjà certaines personnes. Après un certain temps, vous connaîtrez beaucoup de monde, de nombreux habitués viennent danser et de nombreux danseurs viennent occasionnellement."
            ]
        },
    ]

    return (
        <AboutContainer id="about">  
                 <AboutTitle>A propos</AboutTitle>    
            <AboutBox>
                {aboutContent.map((content, index) => (
                    <Collapse 
                    key={index}
                        title={content.title}
                        text={content.texte}
                        image={content.img}
                        altText={content.alt}
                    />
                ))}
                
            </AboutBox>
        </AboutContainer>
    );
};

const AboutContainer = styled.article`
    width: 100%;
`;

const AboutBox = styled.div`
    width: 90%;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 1200px) {
        
        flex-direction: column;
        align-items: center;
    }
`;

const AboutTitle = styled.h2`
    width: 100%;
    color: var(--secondary);
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    font-size: 36px;
    font-family: Lora;
`;
export default About;
