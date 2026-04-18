import React, { useState, createContext } from "react";
import FriendData from "../Data/friendData.json";
import { toast } from "react-toastify";

export const friendContext = createContext();

const Context = ({ children }) => {
  const [friendsData, setFriendsData] = useState(FriendData);
  const [callFunction, setCallFunction] = useState([]); 
  
  const handleCall = (findFriends) => {
    const findCalls = friendsData.find(
      (friend) => friend.id === findFriends.id,
    );

    if (findCalls) {
      setCallFunction([...callFunction, findCalls]);
      toast.success(`Called to ${findFriends.name}`)
    }

    console.log(findCalls);
  };

  // -----------------------------------------------------------------------------------
  const data = {
    setFriendsData,
    friendsData,
    handleCall,
    callFunction,
  };
  return (
    <friendContext.Provider value={data}>{children}</friendContext.Provider>
  );
};

export default Context;
