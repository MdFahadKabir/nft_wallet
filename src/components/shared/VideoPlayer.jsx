import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const VideoPlayer = () => {
  // Video path
  let videosrc = "https://youtu.be/qt1equGhkQE";

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <div>
      <ReactPlayer
        width="900px"
        height="500px"
        url={videosrc}
        controls={true}
        autoplay={true} // Set autoplay to true
        loop={false} // Set loop to false if you don't want it to loop
        // light is useful in case of dark mode
        light={false}
        // Picture in picture
        pip={true}
      />
      <source src={videosrc} type="video/mp4" />
    </div>
  ) : null;
};

export default VideoPlayer;
