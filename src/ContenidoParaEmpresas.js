import React from 'react';
import YoutubePlayer from './YoutubePlayer'; // Asegúrate de ajustar la ruta según la ubicación del archivo

function ContenidoParaEmpresas() {
  return (
    <section id="marcas" className="custom-dark text-white py-5">
      <div className="container mt-5">
        <h1 className="display-4 text-center">Contenido para Empresas</h1>
        <hr className="my-4" />
        <p style={{ fontSize: '0.8rem', textAlign: 'center' }}>
          ¿Querés que tu marca se destaque en el mercado? Sabemos cómo potenciar y mejorar tu imagen con contenido de alta calidad.
          En TNG Estudio te ofrecemos soluciones audiovisuales que te llevarán al siguiente nivel.
        </p>

        {/* Agregar las tarjetas con videos */}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card bg-dark text-white">
              <div className="video-container">
                <YoutubePlayer videoId="uVtVBP7rKKE" />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">Videos Institucionales para Marcas</h5>
                <p className="card-text" style={{ fontSize: '0.7rem' }}>Videos institucionales que ayudarán a fortalecer la imagen de tu marca y comunicar su mensaje de manera efectiva.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-dark text-white">
              <div className="video-container">
                <YoutubePlayer videoId="beiESClUyM0" />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">Filmamos y Editamos tus Cursos</h5>
                <p className="card-text" style={{ fontSize: '0.7rem' }}>Contamos con equipamiento para filmar tus cursos y editarlos para que se vean en la mejor calidad.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-dark text-white">
              <div className="video-container">
                <YoutubePlayer videoId="CZWPzEsFG_s" />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">Videos para Creadores de Contenido</h5>
                <p className="card-text" style={{ fontSize: '0.7rem' }}>Subimos el nivel de tus videos para que alcances más visitas y obtengas más retención en tus videos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContenidoParaEmpresas;
