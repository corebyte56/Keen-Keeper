import React from "react";

const Card = ({ friend }) => {
  return (
    <div className="bg-white w-64 rounded-2xl shadow-2xl p-5 text-center transition hover:-translate-y-2 hover:scale-105 duration-200 ease-out cursor-pointer">
      {/* Image */}
      <img
        src={friend.picture}
        alt="profile"
        className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
      />

      {/* Name */}
      <h2 className="text-md font-semibold text-gray-800">{friend.name}</h2>

      {/* Days */}
      <p className="text-gray-400 text-xs mt-1">
        {friend.days_since_contact}d ago
      </p>

      {/* Tags */}
      <div className="flex justify-center gap-2 mt-3 flex-wrap">
        {friend.tags?.map((tag, idx) => (
          <span
            key={idx}
            className={`
              text-xs px-2 py-1 rounded-full capitalize
              ${tag === "work" && "bg-blue-100 text-blue-600"}
              ${tag === "partner" && "bg-purple-100 text-purple-600"}
              ${tag === "family" && "bg-green-100 text-green-600"}
              ${tag === "friend" && "bg-pink-100 text-pink-600"}
              ${tag === "college" && "bg-indigo-100 text-indigo-600"}
              ${tag === "mentor" && "bg-yellow-100 text-yellow-600"}
              ${!["work", "partner", "family", "friend", "college", "mentor"].includes(tag) && "bg-gray-100 text-gray-600"}
            `}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Status */}
      <div className="mt-3">
        <span
          className={`text-xs px-3 py-1 rounded-full font-medium capitalize ${
            friend.status === "overdue"
              ? "bg-red-700 text-white"
              : friend.status === "almost"
                ? "bg-orange-100 text-orange-500"
                : "bg-green-100 text-green-600"
          }`}
        >
          {friend.status === "overdue"
            ? "Overdue"
            : friend.status === "almost"
              ? "Almost Due"
              : "On-Track"}
        </span>
      </div>
    </div>
  );
};

export default Card;
