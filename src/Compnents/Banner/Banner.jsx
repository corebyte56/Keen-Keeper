import { Plus } from "lucide-react";
import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col text-center items-center gap-6 my-13 md:my-20 px-2">
      <h1 className="text-3xl md:text-5xl font-bold ">Friends to keep close in your life</h1>
      <p className="text-[#64748B] text-xs md:text-[16px]">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the <br /> relationships that matter most.
      </p>

      <button className="btn btn-success w-fit">
        <Plus/> Add Friend
      </button>
    </div>
  );
};

export default Banner;
