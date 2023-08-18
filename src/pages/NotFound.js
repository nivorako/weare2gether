import React , {useEffect} from 'react';
import { useDispatch } from "react-redux";

import { setActivePage } from "../features/pageSlice";

import styled from '@emotion/styled';

const NotFound = () => {

    const dispatch = useDispatch();

    // Mettre à jour l'état de la page active lorsque le composant est monté
    useEffect(() => {
        dispatch(setActivePage("NotFound"));
    }, [dispatch]);

    return (
        <NotFoundContainer>
            <NotFoundBox>
                Page not found
            </NotFoundBox>
        </NotFoundContainer>
    )
}

const NotFoundContainer = styled.main`
    width: 100%;
    height: 50vh;
`;

const NotFoundBox = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    justify-content : center;
    align-items : center;
`;

export default NotFound;
