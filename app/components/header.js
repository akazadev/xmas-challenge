import React from "react";

const Header = () => {
  return (
    <div className="w-full font-semibold flex flex-row justify-between items-center">
      <div className="flex-1 font-black">
        <p>TheCode</p>
      </div>
      <div className="flex-1 flex justify-center space-x-14">
        <p>GitHub</p>
        <p>LinkedIn</p>
        <p>Twitter</p>
      </div>
      <div className="flex-1 flex justify-end space-x-14">
        <p>MyPortfolio</p>
        <p>MyResume</p>
      </div>
    </div>
  );
};

export default Header;