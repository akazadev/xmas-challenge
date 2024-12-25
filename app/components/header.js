import React from "react";

const Header = () => {
  return (
    <div className="w-full font-semibold flex flex-col md:flex-row justify-between items-center">
      <div className="flex-1 font-black text-center md:text-left">
        <p>TheCode</p>
      </div>
      <div className="flex-1 flex justify-center space-x-4 md:space-x-14 mt-4 md:mt-0">
        <p>GitHub</p>
        <p>LinkedIn</p>
        <p>Twitter</p>
      </div>
      <div className="flex-1 flex justify-center md:justify-end space-x-4 md:space-x-14 mt-4 md:mt-0">
        <p>MyPortfolio</p>
        <p>MyResume</p>
      </div>
    </div>
  );
};

export default Header;