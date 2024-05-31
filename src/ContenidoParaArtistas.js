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
  };

  const videoStyle = {
    position: 'relative',
    width: '300px', // Ancho ajustado a tu preferencia
    height: '169px', // Relación de aspecto 16:9 (calculada a partir del ancho)
    borderRadius: '10px',
    overflow: 'hidden',
  };

  return (
    <section id="artistas" className="custom-dark text-white py-5">
      <div className="container mt-5">
        <hr className="my-4" /> {/* Línea colocada antes del título */}
        <h1 className="display-4 text-center" style={{ fontSize: '2rem', fontWeight: 'lighter' }}> {/* Asegurarse de que el título principal sea delgado */}
          Contenido para Artistas
        </h1> 
        <p style={{ fontSize: '0.8rem', textAlign: 'center', marginBottom: '20px' }}>
          Ofrecemos servicios de producción de video de alta calidad para artistas.<br />
          Ya sea que necesites videoclips, filmación de shows en vivo o sesiones en estudio.
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

export default ContenidoParaArtistas;
