import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full font-semibold flex flex-col md:flex-row justify-between items-center p-4">
      <div className="flex-1 font-black text-center md:text-left">
        <p>TheCode</p>
      </div>
      
      <nav className="flex-1 flex justify-center space-x-4 md:space-x-14 mt-4 md:mt-0">
        <ul className="flex gap-4">
          <li className="flex items-center space-x-2">
            <a href="https://github.com/akazadev" target="_blank" rel="noopener noreferrer" className="flex">
              <FaGithub size={20} />
            </a>
            <span className="hidden md:inline">GitHub</span>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="flex">
              <FaLinkedin size={20} />
            </a>
            <span className="hidden md:inline">LinkedIn</span>
          </li>
          <li className="flex items-center space-x-2">
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="flex">
              <FaTwitter size={20} />
            </a>
            <span className="hidden md:inline">Twitter</span>
          </li>
        </ul>
      </nav>

      <div className="flex-1 hidden md:flex flex-col md:flex-row justify-center md:justify-end space-y-2 md:space-y-0 space-x-0 md:space-x-14 mt-4 md:mt-0">
        <p>MyPortfolio</p>
        <p>MyResume</p>
      </div>
    </header>
  );
};

export default Header;