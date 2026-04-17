import React, { Children } from "react";
import { useEffect, useState } from "react";
import { createContext } from "react";

export const friendContext = createContext();

const Context = ({children}) => {
  const [friendsData, setFriendsData] = useState([]);

  const handleFriendsData = async () => {
    try {
      const res = await fetch("/friendData.json");
      const data = await res.json();
      setFriendsData(data);
      // console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    handleFriendsData();
  }, []);

  const data = {
    setFriendsData,
    friendsData
  };

  return (
    <friendContext.Provider value={data}>{children}</friendContext.Provider>
  );
};

export default Context;
