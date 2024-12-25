import React from "react";
import { NavLink } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import { IconButton, Button } from '@mui/material';

const NavBar = () => {
    return (
        <nav className="bg-gray-800 text-white">
        <div className="flex justify-between items-center px-6 py-6">
          <ul className="flex items-center space-x-8">
            <li>
              <NavLink
                to="/home"
                className="hover:text-gray-400 transition-colors duration-300 font-bold"
                activeClassName="text-yellow-400"
              >
                <IconButton>
                  <HomeIcon className="hover:text-gray-400 text-white"/>
                </IconButton>
              </NavLink>
            </li>
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
          <div className="flex items-center space-x-8">
            <a href="mailto:ethanclin03@gmail.com" target="_blank" rel="noopener noreferrer">
              <IconButton className="hover:bg-gray-200">
                <GoogleIcon className="text-red-500" />
              </IconButton>
            </a>

            <a href="https://www.linkedin.com/in/ethanlin03" target="_blank" rel="noopener noreferrer">
              <IconButton className="hover:bg-gray-200">
                <LinkedInIcon className="text-blue-600" />
              </IconButton>
            </a>

            <a href="https://www.github.com/ethanlin03" target="_blank" rel="noopener noreferrer">
              <IconButton>
                <GitHubIcon className="text-gray-700" />
              </IconButton>
            </a>
          </div>
        </div>
      </nav>
    );
};

export default NavBar;