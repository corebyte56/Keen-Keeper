import React from "react";
import Facebook from '../../assets/Icons/facebook.png'
import Instagram from '../../assets/Icons/instagram.png'
import Twitter from '../../assets/Icons/twitter.png'


const Footer = () => {
  return (
    <footer className="bg-[#1f4d3a] text-gray-200 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          KeenKeeper
        </h1>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-gray-300 mb-8 max-w-2xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <h3 className="mb-4 text-lg font-medium">Social Links</h3>

        <div className="flex justify-center gap-4 mb-10">
          <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:scale-110 transition">
            <img src={Facebook} alt="" />
          </a>
          <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:scale-110 transition">
            <img src={Instagram} alt="" />
          </a>
          <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:scale-110 transition">
            <img src={Twitter} alt="" />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-400/30 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <a className="hover:text-white">Privacy Policy</a>
            <a className="hover:text-white">Terms of Service</a>
            <a className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;