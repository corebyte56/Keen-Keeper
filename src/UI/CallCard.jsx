import React, { useContext } from "react";
import { Phone } from "lucide-react";
import { friendContext } from "../Context/Context";

const CallCard = ({ call }) => {
  const { time, date } = useContext(friendContext);
  return (
    <div className="flex items-center gap-4 bg-white rounded-xl shadow-sm p-4 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer">
      {/* Icon */}
      <div className="text-2xl">
        <Phone />
      </div>

      {/* Text */}
      <div>
        <h3 className="font-semibold text-gray-800 flex items-center gap-3 py-3">
          <p className="text-xl">Call</p>
          <span className="text-lg text-gray-500 font-normal">
            with {call.name}
          </span>
        </h3>

        {/* Date + Time */}
        <p className="font-medium text-gray-500">
          {date} • {time}
        </p>
      </div>
    </div>
  );
};

export default CallCard;
