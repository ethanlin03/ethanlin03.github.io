import NavBar from "../components/NavBar";
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';

const ContactPage = () => {
    return (
        <div>
            <NavBar/>
            <h1 className="text-center font-bold text-[26px] mt-32">
                Contact
            </h1>
            <div className="flex justify-center items-center mt-20">
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
        </div>
    );
};

export default ContactPage;