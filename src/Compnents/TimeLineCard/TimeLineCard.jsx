import React, { useContext } from "react";
import { friendContext } from "../../Context/Context";
import CallCard from "../../UI/CallCard";
import TextCard from "../../UI/TextCard";
import VideoCard from "../../UI/VideoCard";

const TimeLineCard = () => {
  const { callFunction, textFunction, videoFunction } = useContext(friendContext);
  console.log(textFunction);

  return (
    <div>
      {callFunction.map((call) => (
        <div className="container mx-auto p-4">
          <CallCard key = {call.id} call = {call}/>
        </div>
      ))}

      {textFunction.map((text) => (
        <div className="container mx-auto p-4">
          <TextCard key = {text.id} text = {text}/>
        </div>
      ))}

      {videoFunction.map((video) => (
        <div className="container mx-auto p-4">
          <VideoCard key = {video.id} video = {video}/>
        </div>
      ))}

    </div>
  );
};

export default TimeLineCard;
