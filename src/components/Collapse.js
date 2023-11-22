import React, { useState } from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import {useMediaQuery} from "@mui/material";
import styled from "@emotion/styled";

const Collapse = ({title, text, image, altText}) => {

    const isMobile = useMediaQuery("(max-width:768px)");
    const [isOpen, setIsOpen] = useState(false);
    const handleOnClick = () => {
        setIsOpen(!isOpen);
    };
   
    return (
        <CollapseDiv>
            <CollapseDivTitle onClick={handleOnClick}>
                <CollapseTitle>
                    {title}
                </CollapseTitle>
                {isOpen ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
            </CollapseDivTitle>
            {isOpen ? (
                <CollapseDivContent>
                    <Img src={image} alt={altText}/>
                    <CollapseDivText>
                        {text.map((t, index) => (
                            <p key={index}>{t}</p>
                        ))}
                    </CollapseDivText>
                </CollapseDivContent>
            ) : null}
            
            
        </CollapseDiv>
  )
}

const CollapseDiv = styled.div`
    width: 100%;
`;

const CollapseDivTitle =  styled.div`
    width: 100%;
    background-color: var(--secondary);
    padding: .5rem;
    border-radius: 10px;
    color: white;
    margin-bottom: .5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all .5s ease;
    &:hover {
        cursor: pointer;
        transform: scale(1.01);
    }
    @media (max-width: 764px){
        
    }
`;

const CollapseTitle = styled.h3`
    font-family: Lora;
`;

const CollapseDivContent = styled.div`
    color: var(--secondary);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media (min-width : 764px){
        flex-direction: row;
        align-items: center;
        margin: 1rem 0;
    }
`;

const CollapseDivText = styled.p`
    padding: .5rem;
    @media (min-width : 764px){
        width: 45%;
    }
`;

const Img = styled.img`
    width: 100%;
    height: 200px;
    border-radius: 10px;
    object-fit: cover;
    @media (min-width : 764px){
        width: 45%;
        height: 100%;
    }
`;
export default Collapse
