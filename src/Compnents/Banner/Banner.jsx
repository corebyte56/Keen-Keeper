import React from "react";
import { motion, hover } from "framer-motion";
import BannerBook from "../../assets/BannerBook.png";
const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-30 bg-gray-500 md:px-25 px-15 md:py-20 py-10 md:rounded-3xl items-center">
      <div className="space-y-6  md:space-y-10">
        <h1 className="text-3xl md:text-6xl font-bold leading-9 md:leading-20">
          Books to freshen up <br /> your bookshelf
        </h1>

        <motion.button
          animate={{
            boxShadow: "0px 8px 25px rgba(21,128,61,0.4)",
          }}
          whileHover={{
            background: "#166534",
            color: "#fff",
            borderColor: "#166534",
            translateY: -6,
            boxShadow: "0px 20px 60px rgba(21,128,61,0.7)",
          }}
          whileTap={{
            scale: 0.92,
          }}
          className="bg-green-700 border border-transparent px-7 py-5 text-xl font-bold rounded-2xl cursor-pointer"
        >
          View The List
        </motion.button>
      </div>

      <motion.img
        whileHover={{
          rotate: 360,
          transition: {
            duration: 2,
            delay: 0.3,
            repeat: Infinity,
            ease: "linear",
          },
        }}

        whileTap = {{
             rotate: 360,
          transition: {
            duration: 2,
            delay: 0.3,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="cursor-grab xl:ml-70"
        src={BannerBook}
        alt="Book"
      />
    </div>
  );
};

export default Banner;
