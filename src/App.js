import React, { useState, useEffect, useRef } from "react";
import VideoPlayer from "./components/VideoPlayer";
import CaptionInput from "./components/CaptionInput";

const App = () => {
  const [videoId, setVideoId] = useState("");
  const [captions, setCaptions] = useState([]);
  const [captionText, setCaptionText] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const playerRef = useRef(null);

  const extractVideoId = (url) => {
    const regex =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const handleAddCaption = () => {
    if (captionText && timestamp) {
      setCaptions([
        ...captions,
        { text: captionText, time: parseFloat(timestamp) },
      ]);
      setCaptionText("");
      setTimestamp("");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current) {
        const currentTime = playerRef.current.getCurrentTime();
        const updatedCaptions = captions.map((caption) => ({
          ...caption,
          visible:
            currentTime >= caption.time && currentTime < caption.time + 5,
        }));
        setCaptions(updatedCaptions);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [captions]);

  const handleVideoReady = (event) => {
    playerRef.current = event.target;
  };

  const handleCaptionTextChange = (e) => setCaptionText(e.target.value);
  const handleTimestampChange = (e) => setTimestamp(e.target.value);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6">Video Caption App</h1>
      <div className="w-full max-w-[40rem]">
        <input
          type="text"
          placeholder="Enter YouTube video URL"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          onChange={(e) => setVideoId(extractVideoId(e.target.value))}
        />
      </div>
      {videoId && (
        <VideoPlayer
          videoId={videoId}
          captions={captions}
          handleVideoReady={handleVideoReady}
        />
      )}
      <CaptionInput
        captionText={captionText}
        timestamp={timestamp}
        onCaptionTextChange={handleCaptionTextChange}
        onTimestampChange={handleTimestampChange}
        onAddCaption={handleAddCaption}
      />
    </div>
  );
};

export default App;
