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
                        {text}
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
    &:hover {
        cursor: pointer;
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
    justify-content: space-between;
    @media (min-width : 764px){
        flex-direction: row;
        align-items: center;
    }
`;
const CollapseDivText = styled.p`
    padding: .5rem;
    @media (min-width : 764px){
        width: 50%;
    }
`;
const Img = styled.img`
    width: 100%;
    height: 200px;
    border-radius: 10px;
    object-fit: cover;
    @media (min-width : 764px){
        width: 50%;
        
    }
`;
export default Collapse
