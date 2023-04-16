import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

interface VideoPlayerProps {
  videoSrc: string;
}

const StyledVideo = styled.video`
  width: 100%;
  height: 500px;
`;

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc }) => {
  const [userInteracted, setUserInteracted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClick = () => {
    if (videoRef.current && !userInteracted) {
      videoRef.current.play();
      setUserInteracted(true);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = videoSrc;
    }
  }, [videoSrc]);

  return (
    <StyledVideo
      ref={videoRef}
      onClick={handleClick}
      controls={!userInteracted}
    />
  );
};

export default VideoPlayer;
