import NavBar from "../components/NavBar";
import me from "../assets/me.png";
import uci from "../assets/uci.png";
import mtsac from "../assets/mtsac.png";
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import Technologies from "../components/Technologies";

const AboutPage = () => {
    return (
        <div>
            <NavBar />
            <div className="max-w-3xl mx-auto mt-32">
                <div className="container mx-auto px-4 py-8 flex items-center mb-40">
                    <div>
                        <img 
                            src={me} 
                            className="h-[500px] w-[400px] object-cover rounded-md z-0 absolute"
                            alt="Ethan"
                        />
                        <div 
                            className="relative bg-white bg-opacity-95 p-4 max-w-md shadow-lg z-10 top-64 left-80 rounded-md"
                            style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
                        >
                            <h1 className="text-2xl font-bold mb-2">About Me</h1>
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
                        <div className="flex items-center justify-center space-x-10 top-44 relative bg-white bg-opacity-90 p-4 max-w-[300px] border border-black border-opacity-30 shadow-lg rounded-md">
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
                    </div>
                </div>
                <div className="container px-4 py-8">
                    <h1 className="text-2xl font-bold mb-4">Education</h1>

                    <div className="flex items-start mb-4">
                        <img src={uci} alt="UCI Icon" className="w-12 h-12 mr-4 mt-2" />
                        <div className="flex-1">
                            <div className="flex justify-between items-baseline">
                                <h2 className="text-lg font-semibold">University of California, Irvine</h2>
                                <p className="text-base">Sep. 2023 – Present</p>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <p className="text-base text-gray-600">Bachelor of Science in Computer Science</p>
                                <p className="text-sm">Irvine, CA</p>
                            </div>
                            <p className="text-base text-gray-600">GPA: 3.87 / 4.0</p>
                        </div>
                    </div>

                    <div className="flex items-start mb-8">
                        <img src={mtsac} alt="MtSac Icon" className="w-12 h-12 mr-4 mt-2" />
                        <div className="flex-1">
                            <div className="flex justify-between items-baseline">
                                <h2 className="text-lg font-semibold">Mount San Antonio College</h2>
                                <p className="text-base">Aug. 2021 – June 2023</p>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <p className="text-base text-gray-600">Computer Science (Transfer)</p>
                                <p className="text-sm">Walnut, CA</p>
                            </div>
                            <p className="text-base text-gray-600">GPA: 3.85 / 4.0</p>
                        </div>
                    </div>
                    <Technologies/>
                </div>
            </div>
        </div>
    );
    
};

export default AboutPage;