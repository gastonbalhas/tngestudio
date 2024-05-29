import React from 'react';
import Header from './Header';
import ContenidoParaEmpresas from './ContenidoParaEmpresas';
import VideosArtistas from './VideosArtistas'; // Actualizado
import Discografia from './Discografia'; // Actualizado
import Footer from './Footer';
import './App.css';


function App() {
  return (
    <div className='App-header'>
      <Header />
      <VideosArtistas /> {/* Cambiado de Videos */}
      <ContenidoParaEmpresas />
      <Discografia /> {/* Cambiado de Discografia */}
      <Footer />
    </div>
  );
}

export default App;
