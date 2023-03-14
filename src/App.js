import logo from './logo.svg';
import './App.css';
import VideoJS from './component/videojs.component'
import React from 'react';
import videojs from 'video.js'
const App=()=> {
  const playerReference = React.useRef(null);
   
   // setting the video-js option for the player
   const videoJsOptions = {
      autoplay: false,
      controls: true,
      responsive: true,
      poster:'https://images4.alphacoders.com/247/thumb-1920-247356.jpg',
      sources: [{
      src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      type: 'video/mp4'
      }]
   };
   
   const playerReady = (player) => {
      playerReference.current = player;
      
      // handling video player
      player.on('waiting', () => {
         videojs.log('Video Player is waiting');
      });
      player.on('dispose', () => {
         videojs.log('Video player will dispose');
      });
   };
   return (
      <>
         <VideoJS options={videoJsOptions} onReady={playerReady} />
      </>
   );
}

export default App;
