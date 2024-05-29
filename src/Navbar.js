import React, { useState } from 'react';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeNav();
    }
  };

  return (
    <nav className={`navbar navbar-dark bg-dark navbar-expand-lg fixed-top ${isNavOpen ? 'mobile-navbar' : ''}`}>
      <div className="container mx-auto flex justify-between items-center">
        <button
          className={`navbar-toggler ${isNavOpen ? 'collapsed' : ''}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isNavOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
          onClick={toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/">
          <img src="./logos/Transparente_LBlanca.png" alt="Logo" width="80" className="d-inline-block align-text-top" />
        </a>
        <div className={`collapse navbar-collapse justify-content-center ${isNavOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mx-3">
              <button className="nav-link text-white" onClick={() => scrollToSection('marcas')}>
                Contenido para Empresas
              </button>
            </li>
            <li className="nav-item mx-3">
              <button className="nav-link text-white" onClick={() => scrollToSection('artistas')}>
                Videos para Artistas
              </button>
            </li>
            <li className="nav-item mx-3">
              <button className="nav-link text-white" onClick={() => scrollToSection('discografia')}>
                Mezcla y Mastering
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
