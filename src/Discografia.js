import React from 'react';

function Spotify() {
  return (
    <section id="discografia" className="custom-dark text-white py-5 text-aling text-center">
      <div className="container">
        <h1 className="display-4">Mezclado en TNG Estudio</h1> {/* Cambiado de "Mezcla y Mastering" a "Contenido para Empresas" */}
        <hr className="my-4" />
        <iframe
          title="Spotify Player"
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/playlist/4qyQ2n0jgZe7QngO4440ZN?utm_source=generator&theme=0"
          width="100%"
          height="700"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default Spotify;
