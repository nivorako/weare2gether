import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Connexion from "./pages/Connexion";
import SignUp from "./pages/SignUp";
import Blog from "./pages/Blog";
import Media from "./pages/Media";
import EventPage from "./pages/EventPage";
import Caroussel from "./pages/Caroussel";
import NotFound from "./pages/NotFound";
import Admin from "./pages/admin/Admin";

import Private from "./pages/private/private";
import GuestPost from "./pages/GuestPost";
import Dashboard from "./pages/admin/Dashboard";
import AdminMedia from "./pages/admin/AdminMedia";
import AdminBlogs from "./pages/admin/AdminBlogs";
import DeleteBlog from "./pages/admin/DeleteBlog";

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
                <Route path="/EventPage" element={<EventPage />} />
                <Route path="GuestPost" element={<GuestPost />} />
                <Route path="/Caroussel/:id" element={<Caroussel />} />
                <Route path="/Private" element={<Private />}>
                    <Route index element={<GuestPost />} />
                    
                </Route>
                <Route path="/Admin" element={<Admin />} >
                    <Route index element={<Dashboard />} />
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="AdminMedia" element={<AdminMedia />} />
                    <Route path="AdminBlogs" element={<AdminBlogs />} />
                    <Route path="DeleteBlog" element={<DeleteBlog />} />
                </Route>
                <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
