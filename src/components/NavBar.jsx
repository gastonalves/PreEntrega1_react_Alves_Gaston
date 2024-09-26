// src/components/NavBar.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'; 


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container-fluid">
      
        <a className="navbar-brand" href="/">
          Tienda Wagon
        </a>

        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/category/ropa">
                Ropa
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/category/electronica">
                iPhone
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/category/deportes">
                Electro
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/category/hogar">
                Hogar
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
