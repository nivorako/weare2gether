import React from 'react';
import { useParams } from 'react-router-dom';
import photos from "../data/dataPhoto.json";

const Caroussel = () => {
    const {id} = useParams();
    console.log("id: ", id);
   // const selectedId = 
    return (
        <div>
            Caroussel ici
        </div>
    )
}

export default Caroussel
