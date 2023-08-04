import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setActivePage } from "../features/pageSlice";

const Blog = () => {
    const dispatch = useDispatch();

    // Mettre à jour l'état de la page active lorsque le composant est monté
    useEffect(() => {
        dispatch(setActivePage("Blog"));
    }, [dispatch]);

    return <div>ici page blog</div>;
};

export default Blog;
