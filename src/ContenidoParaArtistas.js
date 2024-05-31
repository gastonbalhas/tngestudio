import React from 'react';

function ContenidoParaArtistas() {
  const videos = [
    { id: 'videoclips', label: 'Videoclips', videoSrc: '/videos/720Videoclips.mp4' },
    { id: 'videos-en-vivo', label: 'Videos en Vivo', videoSrc: '/videos/720VideosEnVivo.mp4' },
    { id: 'live-sessions', label: 'Live Sessions', videoSrc: '/videos/720LiveSessions.mp4' },
  ];

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
    padding: '20px',
    marginBottom: '20px', // Nuevo margen inferior
  };

  const videoStyle = {
    position: 'relative',
    width: '400px', // Ancho ajustado a tu preferencia
    height: '225px', // Relación de aspecto 16:9 (calculada a partir del ancho)
    borderRadius: '10px',
    overflow: 'hidden',
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'lighter',
    textAlign: 'center',
    marginTop: 0, // Eliminar margen superior en el título
  };

  const descriptionStyle = {
    fontSize: '0.8rem',
    textAlign: 'center',
    marginBottom: '20px', // Agregar margen inferior en la descripción
  };

  return (
    <section id="artistas" className="custom-dark text-white py-4">
      <div className="container mt-1" style={{ marginTop: 0 }}>
        
        <h1 className="display-4" style={titleStyle}>
          Contenido para Artistas
        </h1> 
        <p style={descriptionStyle}>
          Ofrecemos servicios de producción de video de alta calidad para artistas.
          Ya sea que necesites videoclips, filmación de shows en vivo o sesiones en estudio.
        </p>

        <div style={containerStyle}>
          {videos.map((video) => (
            <div key={video.id} style={videoStyle} className="video-container">
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
      <style jsx>{`
        @media (max-width: 768px) {
          .video-container {
            width: 100% !important;
            height: auto !important;
          }
          .video-container video {
            width: 100% !important;
            height: auto !important;
          }
        }
      `}</style>
    </section>
  );
}

export default ContenidoParaArtistas;
