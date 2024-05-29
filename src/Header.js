import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <div>
      <Navbar /> {/* Mantener el Navbar */}
      <div className="mt-5 mb-3"> {/* Agregar margen superior e inferior al contenido */}
        {/* Contenido de la sección */}
      </div>
    </div>
  );
}

export default Header;
