import React from "react";
import VideoPlayer from "./components/VideoPlayer";
import VideoPlayer2 from "./components/VideoPlayerWithReact";

const App = () => {
  const videoSrc = "jenkinswithaws.mp4";
  return <VideoPlayer2 videoSrc={videoSrc} />;
};

export default App;
