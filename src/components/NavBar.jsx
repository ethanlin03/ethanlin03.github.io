import React from "react";
import { NavLink } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const NavBar = () => {
    return (
        <nav className="bg-gray-800 text-white">
        <div className="flex justify-between items-center px-6 py-6">
          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="/about"
                className="hover:text-gray-400 transition-colors duration-300 font-bold"
                activeClassName="text-yellow-400"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className="hover:text-gray-400 transition-colors duration-300 font-bold"
                activeClassName="text-yellow-400"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/experience"
                className="hover:text-gray-400 transition-colors duration-300 font-bold" 
                activeClassName="text-yellow-400"
              >
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                className="hover:text-gray-400 transition-colors duration-300 font-bold"
                activeClassName="text-yellow-400"
              >
                Resume
              </NavLink>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <span className="font-bold">Contact:</span>
            <GoogleIcon />
            <LinkedInIcon />
            <GitHubIcon />
          </div>
        </div>
      </nav>
    );
};

export default NavBar;