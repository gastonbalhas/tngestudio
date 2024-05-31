import React from 'react';

function ContenidoParaArtistas() {
  const videos = [
    { id: 'videoclips', label: 'Videoclips', videoSrc: 'videos/TNG_VideoClips01 4K.mp4' },
    { id: 'videos-en-vivo', label: 'Videos en Vivo', videoSrc: 'videos/TNG_Vivo01 4k.mp4' },
    { id: 'live-sessions', label: 'Live Sessions', videoSrc: 'videos/TNG_Live01 4K.mp4' },
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

  const h3Style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: 0,
    padding: '5px',
    zIndex: 1,
    color: 'white',
    fontFamily: 'inherit', // Usar la misma familia de fuentes que Bootstrap
    fontWeight: 'lighter', // Asegurarse de que sea delgada
    fontSize: '1.25rem', // Tamaño de fuente un poco más pequeño
    textShadow: '0 0 5px rgba(0, 0, 0, 0.5)', // Mantener el texto legible
    textAlign: 'center', // Centrar el texto horizontalmente
    width: '100%', // Asegurarse de que el texto ocupe todo el ancho del contenedor
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
              <h3 style={h3Style}>{video.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContenidoParaArtistas;
