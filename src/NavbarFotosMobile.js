import React from 'react';

function NavbarFotosMobile() {
  const sections = [
    { id: 'artistas', label: 'Videos para Artistas', imgSrc: '/img/Boton1VideosParaArtistas.webp' },
    { id: 'marcas', label: 'Videos para Empresas', imgSrc: '/img/Boton2VideosParaEmpresas.webp' },
    { id: 'grabacion', label: 'Grabaciones', imgSrc: '/img/Boton3Grabacion.webp' },
    { id: 'discografia', label: 'Mezcla y Mastering', imgSrc: '/img/Boton4Mezcla.webp' },
    { id: 'contacto', label: 'Contactanos', imgSrc: '/img/Boton5Contactanos.webp' },
  ];

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center', // Ajuste para centrar los botones
    padding: '10px',
    width: '100%',
  };

  const buttonStyle = {
    width: 'calc(50% - 5px)', // Para que cada botón tenga el ancho de la mitad de la pantalla con espacio entre ellos
    marginBottom: '10px',
    cursor: 'pointer',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    position: 'relative',
    border: 'none',
    transition: 'transform 0.2s, opacity 0.2s',
    overflow: 'hidden',
    borderRadius: '10px',
    height: '100px', // Reducir la altura de los botones a la mitad
  };

  const h3Style = {
    margin: 0,
    padding: '5px',
    position: 'relative',
    zIndex: 1,
    textShadow: '0 0 5px rgba(0, 0, 0, 0.5)',
    fontFamily: 'Montserrat, sans-serif', // Aplicar la fuente Montserrat
    fontWeight: 'thin', // Aplicar el peso de la fuente thin
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
      {sections.slice(0, 4).map((section, index) => (
        <button
          key={section.id}
          className="navbar-button-mobile" // Cambia la clase aquí
          style={{
            ...buttonStyle,
            backgroundImage: `url(${section.imgSrc})`,
            transitionDelay: `${0.1 * index}s`, // Agregar retardo de transición
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(section.id)}
        >
          <div className="overlay" style={overlayDefaultStyle}></div>
          <h3 style={h3Style}>{section.label}</h3>
        </button>
      ))}
      <button // El último botón como rectángulo
        key={sections[4].id}
        className="navbar-button-mobile" // Cambia la clase aquí
        style={{
          ...buttonStyle,
          width: '100%', // Ajustar ancho al 100%
          backgroundImage: `url(${sections[4].imgSrc})`,
          transitionDelay: `${0.1 * sections.length}s`, // Agregar retardo de transición
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick(sections[4].id)}
      >
        <div className="overlay" style={overlayDefaultStyle}></div>
        <h3 style={h3Style}>{sections[4].label}</h3>
      </button>
    </div>
  );
}

export default NavbarFotosMobile;
