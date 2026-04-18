import React, { useState, createContext } from "react";
import FriendData from "../Data/friendData.json";

export const friendContext = createContext();

const Context = ({ children }) => {
  const [friendsData, setFriendsData] = useState(FriendData);

  const data = { setFriendsData, friendsData };
  return (
    <friendContext.Provider value={data}>{children}</friendContext.Provider>
  );
};

export default Context;
