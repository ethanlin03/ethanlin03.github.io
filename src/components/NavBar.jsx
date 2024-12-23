import React from "react";
import { NavLink } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
    return (
        <nav className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          
          <MenuIcon/>
          <div className="text-xl font-bold">My Portfolio</div>
          <GoogleIcon/>
          <LinkedInIcon/>
          <GitHubIcon/>
          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="/about"
                className="hover:text-gray-400 transition-colors duration-300"
                activeClassName="text-yellow-400"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className="hover:text-gray-400 transition-colors duration-300"
                activeClassName="text-yellow-400"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/experience"
                className="hover:text-gray-400 transition-colors duration-300"
                activeClassName="text-yellow-400"
              >
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                className="hover:text-gray-400 transition-colors duration-300"
                activeClassName="text-yellow-400"
              >
                Resume
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
};

export default NavBar;