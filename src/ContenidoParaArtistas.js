import React from 'react';

function ContenidoParaArtistas() {
  return (
    <section id="artistas" className="custom-dark text-white py-5">
      <div className="container mt-5">
        <hr className="my-4" /> {/* Línea colocada antes del título */}
        <h1 className="display-4 text-center" style={{ fontSize: '2rem' }}> {/* Título reducido en 50% */}
          Contenido para Artistas {/* Cambio de título */}
        </h1> 
        <p style={{ fontSize: '0.8rem', textAlign: 'center', marginBottom: '20px' }}> {/* Margen agregado */}
          Ofrecemos servicios de producción de video de alta calidad para artistas.<br />
          Ya sea que necesites videoclips, filmación de shows en vivo o sesiones en estudio.
        </p>

        {/* Agregar las tarjetas con videos */}
        <div className="d-flex flex-wrap justify-content-center">
          <div className="card bg-dark text-white m-2" style={{ width: '24rem' }}>
            <video
              width="100%"
              height="auto"
              src="videos/TNG_VideoClips01 4K.mp4"
              autoPlay
              muted
              loop
              playsInline
              style={{ aspectRatio: '16/9' }}
            />
            <div className="card-body text-center">
              <h5 className="card-title text-center">Video Clips</h5>
              <p className="card-text text-center" style={{ fontSize: '0.7rem' }}>Producción de videoclips.</p>
            </div>
          </div>
          <div className="card bg-dark text-white m-2" style={{ width: '24rem' }}>
            <video
              width="100%"
              height="auto"
              src="videos/TNG_Vivo01 4k.mp4"
              autoPlay
              muted
              loop
              playsInline
              style={{ aspectRatio: '16/9' }}
            />
            <div className="card-body text-center">
              <h5 className="card-title text-center">Videos en Vivo</h5>
              <p className="card-text text-center" style={{ fontSize: '0.7rem' }}>Filmación y edición de shows en vivo.</p>
            </div>
          </div>
          <div className="card bg-dark text-white m-2" style={{ width: '24rem' }}>
            <video
              width="100%"
              height="auto"
              src="videos/TNG_Live01 4K.mp4"
              autoPlay
              muted
              loop
              playsInline
              style={{ aspectRatio: '16/9' }}
            />
            <div className="card-body text-center">
              <h5 className="card-title text-center">Live Sessions</h5>
              <p className="card-text text-center" style={{ fontSize: '0.7rem' }}>Grabaciones y filmación de sesiones en vivo, en estudio o exterior. Contamos con estudio móvil.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContenidoParaArtistas;
