import React,  { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import CustomBtn from '../../components/CustomBtn';

import { setActivePage } from '../../features/pageSlice';

import { 
    Typography, 
} from "@mui/material";

import styled from '@emotion/styled';

const Dashboard = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const menuItems = ['Poster un blog', 'Modifier / supprimer un blod'];
    const handleClick = (item) => {
        if(item === "Poster un blog"){
            navigate("/admin/AdminBlogs")
        }else if(item === "Modifier / supprimer un blod"){
            navigate("/admin/DeleteBlog")
        }
    }
     // Mettre à jour l'état de la page active lorsque le composant est monté
     useEffect(() => {
        dispatch(setActivePage("DashBoard"));
    }, [dispatch]);

    return (
        <DashboardContainer>
            <DashboardBox>

                <CustomBtn 
                    onClick={() => navigate("/Admin/AdminMedia")}
                    sx={{
                        cursor: "pointer"
                    }}
                >
                    <Typography>
                        Lien vers photo / video
                    </Typography>
                </CustomBtn>
                <CustomBtn>
                    <Typography>
                        Lien vers A propos
                    </Typography>
                </CustomBtn>
                <CustomBtn 
                    
                    sx={{
                        cursor: "pointer"
                    }}
                    menuItems={menuItems}
                    onMenuItemClick={handleClick}
                >
                    <Typography>
                        Lien vers Blog
                    </Typography>
                </CustomBtn>
                <CustomBtn>
                    <Typography>
                        Lien vers Events
                    </Typography>
                </CustomBtn>
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
    display: flex;
    justify-content: space-between;
    align-items: center;
`;



export default Dashboard
