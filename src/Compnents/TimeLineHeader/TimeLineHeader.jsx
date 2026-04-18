import React, { useContext } from "react";
import { friendContext } from "../../Context/Context";

const TimeLineHeader = () => {
  const { setFilter } = useContext(friendContext);

  return (
    <div className="space-y-5">
      <h1 className="text-5xl font-bold">Timeline</h1>

      <details className="dropdown">
        <summary className="btn m-1">Filter timeline</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li><button onClick={() => setFilter("all")}>All</button></li>
          <li><button onClick={() => setFilter("call")}>Call</button></li>
          <li><button onClick={() => setFilter("text")}>Text</button></li>
          <li><button onClick={() => setFilter("video")}>Video</button></li>
        </ul>
      </details>
    </div>
  );
};

export default TimeLineHeader;