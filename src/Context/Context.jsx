import React, { useState, createContext } from "react";
import FriendData from "../Data/friendData.json";
import { toast } from "react-toastify";

export const friendContext = createContext();

const Context = ({ children }) => {
  const [friendsData, setFriendsData] = useState(FriendData);
  const [callFunction, setCallFunction] = useState([]);
  const [textFunction, setTextFunction] = useState([]);
  const [videoFunction, setVideoFunction] = useState([]);
  const [filter, setFilter] = useState("all");

  // Real Time
  const now = new Date();

  const date = now.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // call
  const handleCall = (findFriends) => {
    const findCalls = friendsData.find(
      (friend) => friend.id === findFriends.id,
    );

    if (findCalls) {
      setCallFunction([...callFunction, findCalls]);
      toast.success(`Called to ${findFriends.name}`);
    }

    // console.log(findCalls);
  };

  // Text

  const handleText = (findFriends) => {
    const findTexts = friendsData.find(
      (friend) => friend.id === findFriends.id,
    );

    if (findTexts) {
      setTextFunction([...textFunction, findTexts]);
      toast.success(`Texted to ${findFriends.name}`);
    }

    // console.log(findTexts);
  };

  // video

  const handleVideo = (findFriends) => {
    const findVideos = friendsData.find(
      (friend) => friend.id === findFriends.id,
    );

    if (findVideos) {
      setVideoFunction([...videoFunction, findVideos]);
      toast.success(`Video Call to ${findFriends.name}`);
    }

    // console.log(findVideos);
  };

  // filtter

  // -----------------------------------------------------------------------------------
  const data = {
    setFriendsData,
    friendsData,
    handleCall,
    callFunction,
    handleText,
    textFunction,
    handleVideo,
    videoFunction,
    filter,
    setFilter,
    date,
    time,
  };
  return (
    <friendContext.Provider value={data}>{children}</friendContext.Provider>
  );
};

export default Context;
