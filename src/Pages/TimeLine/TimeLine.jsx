import React, { useContext } from "react";
import TimeLineHeader from "../../Compnents/TimeLineHeader/TimeLineHeader";
import TimeLineCard from "../../Compnents/TimeLineCard/TimeLineCard";
import { Inbox } from "lucide-react";
import { friendContext } from "../../Context/Context";

const TimeLine = () => {
  const { callFunction, textFunction, videoFunction } = useContext(friendContext);

  const isEmpty =
    callFunction.length === 0 &&
    textFunction.length === 0 &&
    videoFunction.length === 0;

  return (
    <div className="container mx-auto my-20">
      <TimeLineHeader />

      {isEmpty ? (
        <div className="flex flex-col items-center justify-center text-center px-6">
          
          <div className="bg-gray-100 p-6 rounded-full mb-4">
            <Inbox size={45} className="text-gray-500" />
          </div>

          <h2 className="text-2xl font-semibold text-gray-700">
            No Timeline Found
          </h2>

          <p className="text-gray-500 mt-2 max-w-md">
            No timeline data available yet. Add something new to see it here.
          </p>
        </div>
      ) : (
        <TimeLineCard />
      )}
    </div>
  );
};

export default TimeLine;