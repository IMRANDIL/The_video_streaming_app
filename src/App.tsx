import React from "react";
import VideoPlayer from "./components/VideoPlayer";
import VideoPlayer2 from "./components/VideoPlayerWithReact";

const App = () => {
  const fileName = `faceRecogPython.mp4`;
  const videoSrc = `http://localhost:8080/api/v1/video/${fileName}`;
  return <VideoPlayer2 videoSrc={videoSrc} />;
};

export default App;
