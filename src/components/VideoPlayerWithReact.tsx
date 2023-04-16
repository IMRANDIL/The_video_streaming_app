import React from "react";
import ReactPlayer from "react-player";
import { toast } from "react-toastify";

interface VideoPlayerProps {
  videoSrc: string;
}

const VideoPlayer2: React.FC<VideoPlayerProps> = ({ videoSrc }) => {
  const handlePlayerError = () => {
    toast.error("Error streaming video", { autoClose: 1000 });
  };

  return (
    <div className="player-wrapper">
      <ReactPlayer
        url={videoSrc}
        className="react-player"
        controls
        width="100%"
        height="500px"
        onError={handlePlayerError}
      />
    </div>
  );
};

export default VideoPlayer2;
