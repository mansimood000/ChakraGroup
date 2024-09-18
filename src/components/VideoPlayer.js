import React from 'react';
import videoFile from '../Assets/video.mp4';

function VideoPlayer() {
  return (
    <div className="flex justify-center items-center w-full p-4 mt-14">
      <video
        className="border-2 border-black rounded-lg shadow-lg w-full  h-auto"
        autoPlay
        muted
        playsInline
      >
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
