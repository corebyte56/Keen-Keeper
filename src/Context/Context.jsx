import React, { useEffect, useState, createContext } from "react";

export const friendContext = createContext();

const Context = ({ children }) => {
  const [friendsData, setFriendsData] = useState([]);

  const handleFriendsData = async () => {
    try {
      const res = await fetch("/friendData.json");

      if (!res.ok) {
        throw new Error("(404)");
      }

      const data = await res.json();
      setFriendsData(data);
    } catch (error) {
      console.error("Data not found:", error);
    }
  };

  useEffect(() => {
    handleFriendsData();
  }, []);

  const data = {
    setFriendsData,
    friendsData,
  };

  return (
    <friendContext.Provider value={data}>{children}</friendContext.Provider>
  );
};

export default Context;
