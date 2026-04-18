import React, { useContext } from "react";
import { friendContext } from "../../Context/Context";
import CallCard from "../../UI/CallCard";
import TextCard from "../../UI/TextCard";
import VideoCard from "../../UI/VideoCard";

const TimeLineCard = () => {

  
  const { callFunction, textFunction, videoFunction, filter } = useContext(friendContext);

  return (
    <div>
      
      {(filter === "all" || filter === "call") &&
        callFunction.map((call, index) => (
          <div className="container mx-auto p-4" key={`call-${index}`}>
            <CallCard call={call} />
          </div>
        ))}

      
      {(filter === "all" || filter === "text") &&
        textFunction.map((text, index) => (
          <div className="container mx-auto p-4" key={`text-${index}`}>
            <TextCard text={text} />
          </div>
        ))}

     
      {(filter === "all" || filter === "video") &&
        videoFunction.map((video, index) => (
          <div className="container mx-auto p-4" key={`video-${index}`}>
            <VideoCard video={video} />
          </div>
        ))}
    </div>
  );
};

export default TimeLineCard;