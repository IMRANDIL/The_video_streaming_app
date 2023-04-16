import React from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  videoSrc: string;
  onError?: () => void;
}

const VideoPlayer2: React.FC<VideoPlayerProps> = ({ videoSrc, onError }) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        url={videoSrc}
        className="react-player"
        controls
        width="100%"
        height="500px"
        onError={onError}
      />
    </div>
  );
};

export default VideoPlayer2;
