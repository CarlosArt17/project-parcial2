import React, { Component } from "react";
import './styles/App.css';
import { Routes, Route } from "react-router-dom";
import ImageFondo from "./images/fondo.jpeg"
import "bootstrap/dist/css/bootstrap.min.css";

import AddInsta from "./components/add-insta.component";
import InstaList from "./components/insta-list.component";
import HomePage from "./components/home-page.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
      <img className="image-nav" src={ImageFondo} alt="" />
      <div className="menu-items">
        <div className="menu menu-left">
          <a href="/inicio">Inicio</a>
          <a href="/list">Recuerdos</a>
          <a href="/add">Agregar Recuerdos</a>
        </div>
      </div>
      <div className="menu menu-right">
        <span className="badge"></span>
      </div>
      </nav>

          <Routes>
            <Route path="list" element={<InstaList />} />
            <Route path="add" element={<AddInsta />} />
            <Route path="inicio" element={<HomePage />} />
          </Routes>
      </div>
    );
  }
}

export default App;
