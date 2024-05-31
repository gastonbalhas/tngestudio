import React from 'react';

function Brand() {
  const brandContainerStyle = {
    height: '100px',
    backgroundColor: '#000000', // Color de fondo gris oscuro
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const logoStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
  };

  return (
    <div style={brandContainerStyle}>
      <img src="/logos/Transparente_LBlanca.png" alt="Logo" style={logoStyle} />
    </div>
  );
}

export default Brand;
