import React from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation, Navigate } from "react-router-dom";

const Private = () => {
	const currentUserId  = useSelector((state) => state.auth.currentUser.id);
	const loading  = useSelector((state) => state.auth.loading)
	const location = useLocation();
	
	if (loading) {
		return <div>...Loading</div>;
	}
	return currentUserId ? (
		<>
		<Outlet />
		</>
	) : (
		<Navigate to="/Connexion" state={{ from: location }} />
	);
};

export default Private;
