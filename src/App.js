import React from 'react';
import Header from './Header';
import ContenidoParaEmpresas from './ContenidoParaEmpresas';
import ContenidoParaArtistas from './ContenidoParaArtistas'; // Actualizado
import Discografia from './Discografia'; // Actualizado
import Footer from './Footer';
import './App.css';


function App() {
  return (
    <div className='App-header'>
      <Header />
      <ContenidoParaArtistas /> {/* Cambiado de Videos */}
      <ContenidoParaEmpresas />
      <Discografia /> {/* Cambiado de Discografia */}
      <Footer />
    </div>
  );
}

export default App;
