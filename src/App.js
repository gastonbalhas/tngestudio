import React from 'react';
import NavbarFotos from './NavbarFotos';
import ContenidoParaEmpresas from './ContenidoParaEmpresas';
import ContenidoParaArtistas from './ContenidoParaArtistas'; // Actualizado
import Discografia from './Discografia'; // Actualizado
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div>
      <NavbarFotos />
      <ContenidoParaArtistas /> {/* Cambiado de Videos */}
      <ContenidoParaEmpresas />
      <Discografia /> {/* Cambiado de Discografia */}
      <Footer />
    </div>
  );
}

export default App;
