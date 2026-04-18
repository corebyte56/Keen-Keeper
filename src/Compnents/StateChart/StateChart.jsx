import React, { useContext } from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
import { friendContext } from "../../Context/Context";

const StateChart = () => {
  const { callFunction, textFunction, videoFunction } =
    useContext(friendContext);

  const chartData = [
    { name: "Calls", value: callFunction.length, fill: "#0088FE" },
    { name: "Texts", value: textFunction.length, fill: "#00C49F" },
    { name: "Videos", value: videoFunction.length, fill: "#FFBB28" },
  ];

  return (
    <div className="container mx-auto bg-white shadow-2xl my-9 p-6 rounded-xl">

      {/* Title */}
      <h2 className="text-left text-gray-500 font-bold text-lg mb-4">
        By Interaction Type
      </h2>

      {/* Chart */}
      <div className="w-full h-75">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              innerRadius={60}
              paddingAngle={5}
              label
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 mt-4">

        {chartData.map((item, index) => (
          <div key={index} className="flex items-center gap-2">

            {/* color circle */}
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.fill }}
            ></div>

            {/* label */}
            <span className="text-sm text-gray-600 font-medium">
              {item.name} ({item.value})
            </span>

          </div>
        ))}

      </div>

    </div>
  );
};

export default StateChart;