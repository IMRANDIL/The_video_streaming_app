import React from "react";
import VideoPlayer from "./components/VideoPlayer";

const App = () => {
  const videoSrc = "http://your-backend.com/stream";
  return <VideoPlayer videoSrc={videoSrc} />;
};

export default App;
