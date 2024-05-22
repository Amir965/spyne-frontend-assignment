import React from "react";

const CaptionInput = ({
  captionText,
  timestamp,
  onCaptionTextChange,
  onTimestampChange,
  onAddCaption,
}) => (
  <div className="w-full max-w-[40rem]">
    <div className="flex flex-col md:flex-row md:space-x-2">
      <input
        type="text"
        placeholder="Enter caption"
        value={captionText}
        className="w-full md:w-auto flex-1 p-2 mb-2 md:mb-0 border border-gray-300 rounded"
        onChange={onCaptionTextChange}
      />
      <input
        type="number"
        placeholder="Enter timestamp (seconds)"
        value={timestamp}
        className="w-full md:w-auto flex-1 p-2 mb-4 md:mb-0 border border-gray-300 rounded"
        onChange={onTimestampChange}
      />
      <button
        onClick={onAddCaption}
        className="w-full md:w-auto bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Add Caption
      </button>
    </div>
  </div>
);

export default CaptionInput;
