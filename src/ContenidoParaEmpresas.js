import React from 'react';

function ContenidoParaEmpresas() {
  return (
    <section id="marcas" className="custom-dark text-white py-5">
      <div className="container"> {/* Eliminamos el margen superior */}
        <hr className="my-4" /> {/* Línea colocada antes del título */}
        <h1 className="display-4 text-center" style={{ fontSize: '2rem' }}> {/* Título reducido en 50% */}
          Contenido para Empresas
        </h1>
        <p style={{ fontSize: '0.8rem', textAlign: 'center', marginBottom: '20px' }}> {/* Margen agregado */}
          ¿Querés que tu marca se destaque en el mercado? Sabemos cómo potenciar y mejorar tu imagen con contenido de alta calidad.
          En TNG Estudio te ofrecemos soluciones audiovisuales que te llevarán al siguiente nivel.
        </p>

        {/* Agregar las tarjetas con videos */}
        <div className="d-flex flex-wrap justify-content-center">
          <div className="card bg-dark text-white m-2" style={{ width: '24rem' }}>
            <video
              width="100%"
              height="auto"
              src="videos/V1080Institucionales.mp4"
              autoPlay
              muted
              loop
              playsInline
              style={{ aspectRatio: '16/9' }}
            />
            <div className="card-body text-center">
              <h5 className="card-title text-center">Videos Institucionales para Marcas</h5>
              <p className="card-text text-center" style={{ fontSize: '0.7rem' }}>Videos institucionales que ayudarán a fortalecer la imagen de tu marca y comunicar su mensaje de manera efectiva.</p>
            </div>
          </div>
          <div className="card bg-dark text-white m-2" style={{ width: '24rem' }}>
            <video
              width="100%"
              height="auto"
              src="videos/V1080Cursos.mp4"
              autoPlay
              muted
              loop
              playsInline
              style={{ aspectRatio: '16/9' }}
            />
            <div className="card-body text-center">
              <h5 className="card-title text-center">Filmación y Edición de Cursos</h5>
              <p className="card-text text-center" style={{ fontSize: '0.7rem' }}>Contamos con equipamiento para filmar tus cursos y editarlos para que se vean en la mejor calidad.</p>
            </div>
          </div>
          <div className="card bg-dark text-white m-2" style={{ width: '24rem' }}>
            <video
              width="100%"
              height="auto"
              src="videos/ContenidoRedes.mp4"
              autoPlay
              muted
              loop
              playsInline
              style={{ aspectRatio: '16/9' }}
            />
            <div className="card-body text-center">
              <h5 className="card-title text-center">Contenido para Redes Sociales</h5>
              <p className="card-text text-center" style={{ fontSize: '0.7rem' }}>Subimos el nivel de tus videos para que alcances más visitas y obtengas más retención en tus videos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContenidoParaEmpresas;
