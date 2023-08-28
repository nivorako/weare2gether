import React from 'react';
import { useSelector } from "react-redux";
import { Outlet, useLocation, Navigate } from "react-router-dom";

const Admin = () => {
    const currentAdminId = useSelector((state) => state.admin.currentAdmin.id);
    const loading = useSelector((state) => state.admin.loading);
    const location = useLocation();

    if (loading) {
        return <div>...Loading</div>;
    }
    return currentAdminId ? (
        <div>
            <Outlet />
        </div>
    ) : (
        <Navigate to="/Connexion" state={{ from: location }} />
    )
}

export default Admin
