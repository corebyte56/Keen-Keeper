import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import {
  Phone,
  MessageSquare,
  Video,
  Archive,
  Trash2,
  AlarmClock,
} from "lucide-react";
import { friendContext } from "../../Context/Context";

const FriendDetails = () => {
  // Context   
  const { handleCall, handleText, handleVideo } = useContext(friendContext);

  const { Id } = useParams();

  //   Dynamic path Loader
  const friends = useLoaderData();

  const findFriends = friends.find((fr) => fr.id == Id);
  //   console.log(Id);

  const {
    name,
    picture,
    email,
    days_since_contact,
    status,
    tags,
    bio,
    goal,
    next_due_date,
  } = findFriends;

  if (!findFriends) {
    return <p>Loading or Friend not found...</p>;
  }

  return (
    <div className="container mx-auto my-10 p-4">
      {/* MAIN CARD */}
      <div className="bg-white rounded-2xl shadow p-6 grid md:grid-cols-3 gap-6">
        {/* LEFT PROFILE */}
        <div className="space-y-4 text-center md:border-r md:pr-4">
          <img
            src={picture}
            alt={name}
            className="w-20 h-20 rounded-full mx-auto"
          />

          <h2 className="text-xl font-semibold">{name}</h2>

          <span
            className={`px-3 py-1 text-sm rounded-full  ${
              status === "overdue"
                ? "bg-red-600 text-white"
                : "bg-green-600 text-white"
            }`}
          >
            {status}
          </span>

          <div className="flex justify-center gap-2 flex-wrap my-3">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="bg-green-600 text-white text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-sm text-gray-500 italic">"{bio}"</p>
          <p className="text-xs text-gray-400">Preferred: {email}</p>

          {/* SIDE BUTTONS */}
          <div className="space-y-2 pt-4">
            <button
              className="flex items-center justify-center gap-2 w-full p-2 rounded-lg border text-sm font-semibold cursor-pointer
            hover:-translate-y-1 hover:shadow-md hover:scale-[1.03] transition-all duration-200"
            >
              <AlarmClock />
              Snooze 2 Weeks
            </button>

            <button
              className="flex items-center justify-center gap-2 w-full p-2 rounded-lg border text-sm font-semibold cursor-pointer
            hover:-translate-y-1 hover:shadow-md hover:scale-[1.03] transition-all duration-200"
            >
              <Archive />
              Archive
            </button>

            <button
              className="flex items-center justify-center gap-2 w-full p-2 rounded-lg border text-sm font-semibold cursor-pointer
            text-red-500 border-red-200
            hover:-translate-y-1 hover:shadow-md hover:scale-[1.03] transition-all duration-200"
            >
              <Trash2 />
              Delete
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:col-span-2 space-y-4">
          {/* STATS */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <h2 className="text-2xl font-bold text-green-700">
                {days_since_contact}
              </h2>
              <p className="text-sm text-gray-500">Days Since Contact</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <h2 className="text-2xl font-bold text-green-700">{goal}</h2>
              <p className="text-sm text-gray-500">Goal (Days)</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <h2 className="text-2xl font-bold text-green-700">
                {next_due_date}
              </h2>
              <p className="text-sm text-gray-500">Next Due</p>
            </div>
          </div>

          {/* GOAL */}
          <div className="bg-gray-50 rounded-xl p-5 flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-gray-700">Relationship Goal</h3>
              <p className="text-sm text-gray-500">
                Connect every <span className="font-bold">{goal} days</span>
              </p>
            </div>

            <button className="px-4 py-1 border rounded-lg cursor-pointer hover:bg-gray-100 transition">
              Edit
            </button>
          </div>

          {/* QUICK ACTION */}
          <div className="bg-gray-50 rounded-xl p-5">
            <h3 className="mb-3 font-semibold text-gray-700">Quick Check-In</h3>

            <div className="grid grid-cols-3 gap-4">
              <button
              onClick={()=>handleCall(findFriends)}

                className="flex flex-col items-center gap-2 p-4 rounded-xl border cursor-pointer
              hover:-translate-y-1 hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                <Phone />
                <span className="text-sm font-semibold">Call</span>
              </button>

              <button
              onClick={()=>handleText(findFriends)}
                className="flex flex-col items-center gap-2 p-4 rounded-xl border cursor-pointer
              hover:-translate-y-1 hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                <MessageSquare />
                <span className="text-sm">Text</span>
              </button>

              <button
              onClick={()=>handleVideo(findFriends)}
                className="flex flex-col items-center gap-2 p-4 rounded-xl border cursor-pointer
              hover:-translate-y-1 hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                <Video />
                <span className="text-sm">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
