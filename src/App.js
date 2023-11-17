import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import {routes} from "./Routes";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {routes.map(({ path, component }, index) => {
          return <Route path={path} element={component} key={index} />;
        })}
      </Routes>
    </>
  );
}

export default App;
