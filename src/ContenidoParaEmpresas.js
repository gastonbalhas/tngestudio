import React from 'react';

function ContenidoParaEmpresas() {
  const videos = [
    { id: 'institucionales', label: 'Videos Institucionales para Marcas', videoSrc: '/videos/720Marcas.mp4' },
    { id: 'cursos', label: 'Filmación y Edición de Cursos', videoSrc: '/videos/720Cursos.mp4' },
    { id: 'productos', label: 'Contenido para Redes Sociales', videoSrc: '/videos/720Productos.mp4' },
  ];

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
    padding: '20px',
  };

  const videoStyle = {
    position: 'relative',
    width: '300px', // Ancho ajustado a tu preferencia
    height: '169px', // Relación de aspecto 16:9 (calculada a partir del ancho)
    borderRadius: '10px',
    overflow: 'hidden',
  };

  return (
    <section id="marcas" className="custom-dark text-white py-5">
      <div className="container mt-5">
        <hr className="my-4" /> {/* Línea colocada antes del título */}
        <h1 className="display-4 text-center" style={{ fontSize: '2rem', fontWeight: 'lighter' }}> {/* Asegurarse de que el título principal sea delgado */}
          Contenido para Empresas
        </h1> 
        <p style={{ fontSize: '0.8rem', textAlign: 'center', marginBottom: '20px' }}>
          ¿Querés que tu marca se destaque en el mercado? Sabemos cómo potenciar y mejorar tu imagen con contenido de alta calidad.
          En TNG Estudio te ofrecemos soluciones audiovisuales que te llevarán al siguiente nivel.
        </p>

        <div style={containerStyle}>
          {videos.map((video) => (
            <div key={video.id} style={videoStyle}>
              <video
                width="100%"
                height="100%"
                src={video.videoSrc}
                autoPlay
                muted
                loop
                playsInline
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContenidoParaEmpresas;
