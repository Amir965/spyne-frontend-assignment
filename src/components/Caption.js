import React from "react";

const Caption = ({ text }) => (
  <div
    className="video-caption absolute left-0 w-full text-center text-white bg-opacity-50"
    style={{ top: "70%", transform: "translateY(-50%)" }}
  >
    {text}
  </div>
);

export default Caption;
