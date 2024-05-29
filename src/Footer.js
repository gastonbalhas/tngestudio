import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: 'black', 
    color: 'white', 
    paddingTop: '10px', 
    paddingBottom: '10px',
  };

  const gimenaStyle = {
    fontSize: '10px', // Tamaño de fuente en píxeles para el párrafo de Gimena Walls
  };

  return (
    <footer style={footerStyle} className="text-center">
      <div className="container">
        <p>Desarrollado por TNG</p>
        <p>Todos los derechos reservados</p>
        <p style={gimenaStyle}>ir a arriba</p>
      </div>
    </footer>
  );
}

export default Footer;
