// NavbarFotos.js
import React from 'react';

function NavbarFotos() {
  const sections = [
    { id: 'artistas', label: 'Videos para Artistas', imgSrc: '/img/Boton1VideosParaArtistas.jpg' },
    { id: 'marcas', label: 'Videos para Empresas', imgSrc: '/img/Boton2VideosParaEmpresas.jpg' },
    { id: 'grabacion', label: 'Grabaciones', imgSrc: '/img/Boton3Grabacion.jpg' },
    { id: 'discografia', label: 'Mezcla y Mastering', imgSrc: '/img/Boton4Mezcla.jpg' },
    { id: 'contacto', label: 'Contactanos', imgSrc: '/img/Boton5Contactanos.jpg' },
  ];

  const containerStyle = {
    display: 'flex',
    width: '100%',
    height: '600px',
    margin: 0,
    padding: 0,
    justifyContent: 'space-around', // Ajuste para espaciar los botones
  };

  // Resto del código del NavbarFotos
}

export default NavbarFotos;
