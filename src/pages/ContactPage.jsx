import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import NavBar from "../components/NavBar";
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';

const ContactPage = ( { needNavBar, marginTop }) => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm('service_9e3rn8n', 'template_bmuvt6i', form.current, {
            publicKey: 'N969MZq5PJMFQNcCB',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
        e.target.reset();
    };
    return (
        <div>
            {needNavBar && <NavBar/>}
            <div className={`max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg ${marginTop ? `mt-${marginTop}` : ''}`}>
                <h2 className="text-2xl font-bold mb-2 text-center">Contact Me!</h2>
                <h3 className="text-sm mb-6 text-center">Feel free to contact me directly at <u className="font-semibold">ethanclin03@gmail.com</u> or through this form.</h3>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="mb-4">
                    <input
                        type="text"
                        id="name"
                        name="user_name"
                        placeholder="Your name"
                        required
                        className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    </div>

                    <div className="mb-4">
                    <input
                        type="email"
                        id="email"
                        name="user_email"
                        placeholder="Your email"
                        required
                        className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    </div>

                    <div className="mb-4">
                    <textarea
                        id="message"
                        name="user_message"
                        placeholder="Your message"
                        rows="4"
                        required
                        className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                    </div>

                    <div className="flex justify-start">
                    <button
                        type="submit"
                        className="px-6 py-3 bg-blue-500 text-white rounded-3xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <div className="flex items-center">
                            <span className="font-semibold">Submit</span>
                            <SendIcon className="ml-2 text-gray-300" sx={{ fontSize: '20px' }} />
                        </div>
                    </button>
                    </div>
                </form>
            </div>

            <div className="flex justify-center items-center mt-10 mb-20">
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