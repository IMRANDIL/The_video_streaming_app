import React, { useRef, useEffect } from "react";
import styled from "styled-components";

interface VideoPlayerProps {
  videoSrc: string;
}

const StyledVideo = styled.video`
  width: 100%;
  height: 500px;
`;

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = videoSrc;
      videoRef.current.play();
    }
  }, [videoSrc]);

  return <StyledVideo ref={videoRef} controls />;
};

export default VideoPlayer;
