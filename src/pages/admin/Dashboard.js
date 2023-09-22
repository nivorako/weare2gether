import React,  { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import { setActivePage } from '../../features/pageSlice';

import { 
    Typography, 
    Box,
    Button
} from "@mui/material";

import styled from '@emotion/styled';

const Dashboard = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

     // Mettre à jour l'état de la page active lorsque le composant est monté
     useEffect(() => {
        dispatch(setActivePage("DashBoard"));
    }, [dispatch]);

    return (
        <DashboardContainer>
            <DashboardBox>

                <Box 
                    onClick={() => navigate("/Admin/AdminMedia")}
                    sx={{
                        cursor: "pointer"
                    }}
                >
                    <Typography>
                        Lien vers photo / video
                    </Typography>
                </Box>
                <Box>
                    <Typography>
                        Lien vers A propos
                    </Typography>
                </Box>
                <Box 
                    onClick={() => navigate("/Admin/AdminBlogs")}
                    sx={{
                        cursor: "pointer"
                    }}

                >
                    <Typography>
                        Lien vers Blog
                    </Typography>
                </Box>
                <Box>
                    <Typography>
                        Lien vers Events
                    </Typography>
                </Box>
            </DashboardBox>
            
        </DashboardContainer>
    )
}

const DashboardContainer = styled.main`
    width : 100vw;
   
`;

const DashboardBox = styled.div`
    width: 80%;
    height: 50vh;
    margin: auto;
`;

export default Dashboard
