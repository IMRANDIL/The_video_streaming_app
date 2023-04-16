import React from "react";
import { toast } from "react-toastify";
import VideoPlayer2 from "./components/VideoPlayerWithReact";

const App = () => {
  const [fileName, setFileName] = React.useState("");
  const [videoSrc, setVideoSrc] = React.useState("");

  // const videoSrc = `http://localhost:8080/api/v1/video/${fileName}`;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFileName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setVideoSrc(`http://localhost:8080/api/v1/video/${fileName}`);

    // return <VideoPlayer2 videoSrc={videoSrc} />;
  };

  const handlePlayerError = () => {
    toast.error("Error streaming video", { autoClose: 1000 });
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Welcome to Video Streaming App</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <label>
          Video File Name:(You want to play):
          <input type="text" value={fileName} onChange={handleChange} />
        </label>
        <input
          type="submit"
          value="Submit"
          style={{ margin: "5px", cursor: "pointer" }}
        />
      </form>
      <VideoPlayer2 videoSrc={videoSrc} onError={handlePlayerError} />
    </div>
  );
};

export default App;
