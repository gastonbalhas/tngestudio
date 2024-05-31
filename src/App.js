// App.js
import React, { useState, useEffect } from 'react';
import NavbarFotos from './NavbarFotos';
import NavbarFotosMobile from './NavbarFotosMobile';
import ContenidoParaEmpresas from './ContenidoParaEmpresas';
import ContenidoParaArtistas from './ContenidoParaArtistas';
import Discografia from './Discografia';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? <NavbarFotosMobile /> : <NavbarFotos />}
      <ContenidoParaArtistas />
      <ContenidoParaEmpresas />
      <Discografia />
      <Footer />
    </div>
  );
}

export default App;
