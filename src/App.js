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
import NotFound from "./pages/NotFound";

import Private from "./pages/private/private";

import "./App.css";
import GuestPost from "./pages/private/GuestPost";

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
                <Route path="/Private" element={<Private />} >
                    <Route index element={<GuestPost />} />
                    <Route path="GuestPost" element={<GuestPost />} />
                </Route>
                <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
