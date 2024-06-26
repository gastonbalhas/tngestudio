import React from 'react';

function NavbarFotos() {
  const sections = [
    { id: 'artistas', label: 'Videos para Artistas', imgSrc: '/img/Boton1VideosParaArtistas.webp' },
    { id: 'marcas', label: 'Videos para Empresas', imgSrc: '/img/Boton2VideosParaEmpresas.webp' },
    { id: 'grabacion', label: 'Grabaciones', imgSrc: '/img/Boton3Grabacion.webp' },
    { id: 'discografia', label: 'Mezcla y Mastering', imgSrc: '/img/Boton4Mezcla.webp' },
    { id: 'contacto', label: 'Contactanos', imgSrc: '/img/Boton5Contactanos.webp' },
  ];

  const containerStyle = {
    display: 'flex',
    width: '100vw',
    height: '600px',
    margin: 0,
    padding: 0,
  };

  const buttonStyle = {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    position: 'relative',
    border: 'none',
    transition: 'transform 0.2s, opacity 0.2s',
    overflow: 'hidden',
    borderRadius: '10px',
  };

  const h3Style = {
    margin: 0,
    padding: '5px',
    position: 'relative',
    zIndex: 1,
    textShadow: '0 0 5px rgba(0, 0, 0, 0.5)',
  };

  const overlayDefaultStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 0,
    borderRadius: '10px',
    transition: 'opacity 0.2s',
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.querySelector('.overlay').style.opacity = '0.5';
    e.currentTarget.style.transform = 'scale(1.05)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.querySelector('.overlay').style.opacity = '0.8';
    e.currentTarget.style.transform = 'scale(1)';
  };

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={containerStyle}>
      {sections.map((section) => (
        <button
          key={section.id}
          className="navbar-button"
          style={{ ...buttonStyle, backgroundImage: `url(${section.imgSrc})` }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(section.id)}
        >
          <div className="overlay" style={overlayDefaultStyle}></div>
          <h3 className="custom-button-label" style={h3Style}>{section.label}</h3> {/* Aquí se agrega la clase y el estilo */}
        </button>
      ))}
    </div>
  );
}

export default NavbarFotos;

