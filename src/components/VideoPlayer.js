import React from "react";
import YouTube from "react-youtube";
import Caption from "./Caption";

const VideoPlayer = ({ videoId, captions, handleVideoReady }) => (
  <div className="w-full max-w-3xl mb-4">
    <div className="relative">
      <YouTube
        videoId={videoId}
        opts={{ playerVars: { autoplay: 1 } }}
        onReady={handleVideoReady}
        className="w-full sm:h-96 flex justify-center"
      />
      {captions.map(
        (caption, index) =>
          caption.visible && <Caption key={index} text={caption.text} />
      )}
    </div>
  </div>
);

export default VideoPlayer;
