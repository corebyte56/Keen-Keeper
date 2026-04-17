import React, { useEffect, useState } from "react";
import Card from "../../UI/Card";

const Friends = () => {
  const [friendsData, setFriendsData] = useState([]);

  const handleFriendsData = async () => {
    try {
      const res = await fetch("/friendData.json");
      const data = await res.json();
      setFriendsData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
      handleFriendsData();
    }, []);

  return (
    <div>
      <h2>Your Friends</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {
        friendsData.map((friend) => (
        <Card key={friend.id} friend = {friend}/>
        ))
        
        }</div>
    </div>
  );
};

export default Friends;
