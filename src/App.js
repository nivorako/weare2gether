import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Connexion from "./pages/Connexion";
import SignUp from "./pages/SignUp";
import Blog from "./pages/Blog";
import Media from "./pages/Media";
import Caroussel from "./pages/Caroussel";

import "./App.css";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Connexion" element={<Connexion />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/Blog" element={<Blog />} />
                <Route path="/Media" element={<Media />} />
                <Route path="/Caroussel/:id" element={<Caroussel />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
