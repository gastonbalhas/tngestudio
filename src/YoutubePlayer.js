import React from 'react';

const YoutubePlayer = ({ videoId }) => {
  return (
    <div className="youtube-player">
      <iframe
        width="100%"
        height="200" // Ajusta la altura según lo necesites
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&vq=hd1080`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        style={{ width: '100%', height: '100%', aspectRatio: '16/9' }}
      ></iframe>
    </div>
  );
};

export default YoutubePlayer;
