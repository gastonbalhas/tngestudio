import React from 'react';

function VideosParaArtistas() {
  return (
    <section id="artistas" className="custom-dark text-white py-5">
      <div className="container mt-5">
        <h1 className="display-4 text-center">Videos para Artistas</h1>
        <hr className="my-4" />
        <p>
          Ofrecemos servicios de producción de video de alta calidad para artistas. Ya sea que necesites videoclips, filmación de shows en vivo o sesiones en estudio, estamos aquí para capturar y realzar tu talento.
        </p>

        {/* Agregar las tarjetas con videos */}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card bg-dark text-white">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/NskUj4FhyoU?si=7MqPbbGMzvk28OfC&autoplay=1&mute=1&loop=1&playlist=NskUj4FhyoU&controls=0&showinfo=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ width: '100%', height: '100%', aspectRatio: '16/9' }}
              ></iframe>
              <div className="card-body text-center">
                <h5 className="card-title text-center">Video Clips</h5>
                <p className="card-text text-center">Producción de videoclips.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-dark text-white">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/a6H5u990S1w?si=cjpekgxJ2DKe3gcY&autoplay=1&mute=1&loop=1&playlist=a6H5u990S1w&controls=0&showinfo=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ width: '100%', height: '100%', aspectRatio: '16/9' }}
              ></iframe>
              <div className="card-body text-center">
                <h5 className="card-title text-center">Videos en Vivo</h5>
                <p className="card-text text-center">Filmación y edición de shows en vivo.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-dark text-white">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/OfdpAqi-mU0?si=fJ3l4UIosdPOvHDi&autoplay=1&mute=1&loop=1&playlist=OfdpAqi-mU0&controls=0&showinfo=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ width: '100%', height: '100%', aspectRatio: '16/9' }}
              ></iframe>
              <div className="card-body text-center">
                <h5 className="card-title text-center">Live Sessions</h5>
                <p className="card-text text-center">Grabaciones y filmación de sesiones en vivo, en estudio o exterior. Contamos con estudio móvil.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideosParaArtistas;
