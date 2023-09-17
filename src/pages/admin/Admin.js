import React from 'react';
import { useSelector } from "react-redux";
import { Outlet, useLocation, Navigate } from "react-router-dom";

import Parse from "parse/dist/parse.min.js";

const APPLICATION_ID = "GXgBEka1jlGx1EbzJcgbtOuv1FP9CnH5GO4ZpYMV";
const HOST_URL = "https://parseapi.back4app.com/";
const JAVASCRIPT_KEY = "3it9PTiIq5GZtqnBkkn8VFJAeJZeOjFditnE6DQM";

Parse.initialize(APPLICATION_ID, JAVASCRIPT_KEY);
Parse.serverURL = HOST_URL;

const Admin = () => {
    const currentUser = Parse.User.current();
    const currentUserRole = currentUser.get("role");
    const loading = useSelector((state) => state.auth.loading);
    const location = useLocation();

    if (loading) {
        return <div>...Loading</div>;
    }
    return currentUserRole === "admin" ? (
        <div>
            <Outlet />
        </div>
    ) : (
        <Navigate to="/Connexion" state={{ from: location }} />
    )
}

export default Admin
