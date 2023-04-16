import ReactPlayer from "react-player";

interface VideoPlayerProps {
  videoSrc: string;
}

const VideoPlayer2: React.FC<VideoPlayerProps> = ({ videoSrc }) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        url={videoSrc}
        className="react-player"
        controls
        width="100%"
        height="500px"
      />
    </div>
  );
};

export default VideoPlayer2;
