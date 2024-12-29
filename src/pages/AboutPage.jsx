import NavBar from "../components/NavBar";
import me from "../assets/me.png";
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';

const AboutPage = () => {
    return (
        <div>
            <NavBar />
            <div className="max-w-3xl mx-auto mt-32">
                <div className="container mx-auto px-4 py-8 flex items-center">
                    <div>
                        <img 
                            src={me} 
                            className="h-[500px] w-[400px] object-cover rounded-md z-0 absolute"
                            alt="Ethan"
                        />
                        <div 
                            className="relative bg-white bg-opacity-90 p-4 max-w-md shadow-lg z-10 top-56 left-80 rounded-md"
                            style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
                        >
                            <h1 className="text-xl font-bold mb-2">About Me</h1>
                            <p className="mb-4">
                                Hi, I'm Ethan! I'm a Computer Science student at the University of California, Irvine. 
                                My journey for programming started in 2015, where my curiosity for games met my love 
                                for creativity and creation.
                            </p>
                            <p className="mb-4">
                                I've been able to use my skills to create a twist on a classic game, Rock Paper Scissors, 
                                to creating a website to help track my medications. Through each project, I've been able to build upon my technical skills while pushing 
                                my innovativeness and creativity. Let's connect and create fresh, exciting applications 
                                for the world!
                            </p>
                        </div>
                        <div className="flex items-center space-x-14 top-44 left-10 relative">
                            <a href="mailto:ethanclin03@gmail.com" target="_blank" rel="noopener noreferrer">
                                <IconButton className="hover:bg-gray-200">
                                    <GoogleIcon className="text-red-500" style={{ fontSize: '30px' }}/>
                                </IconButton>
                            </a>

                            <a href="https://www.linkedin.com/in/ethanlin03" target="_blank" rel="noopener noreferrer">
                                <IconButton className="hover:bg-gray-200">
                                    <LinkedInIcon className="text-blue-600" style={{ fontSize: '30px' }}/>
                                </IconButton>
                            </a>

                            <a href="https://www.github.com/ethanlin03" target="_blank" rel="noopener noreferrer">
                                <IconButton>
                                    <GitHubIcon className="text-gray-700" style={{ fontSize: '30px' }}/>
                                </IconButton>
                            </a>
                        </div>

                        <h2 className="text-xl font-bold mb-2 top-10">Education</h2>
                    </div>
                </div>
            </div>
        </div>
    );
    
};

export default AboutPage;