import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Project from "./components/project/Project";
import Updates from "./components/updates/Updates";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Footer from "./components/card/Footer";


function App() {
  return (
    <div className="w-screen min-h-screen h-full bg-fuchsia-400 text-black flex justify-start items-center flex-col">
      <NavBar />
      <Routes>
        <Route exact path={"/portfolio-site/"} element={<Home />} />
        <Route exact path={"/portfolio-site/projects"} element={<Project />} />
        <Route exact path={"/portfolio-site/updates"} element={<Updates />} />
        <Route exact path={"/portfolio-site/contact"} element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
