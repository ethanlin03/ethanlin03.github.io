import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import NavBar from "../components/NavBar";
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';

const ContactPage = ( { needNavBar, viewHeight, marginBottom }) => {
    const form = useRef();
    const [showToast, setShowToast] = useState(false);
    const [progress, setProgress] = useState(100);

    const sendEmail = (e) => {
    e.preventDefault();

    const handleSuccess = () => {
        setShowToast(true);
        setProgress(100);
        setTimeout(() => setShowToast(false), 3000); // Auto-hide after 3 seconds
    };

    emailjs
        .sendForm('service_9e3rn8n', 'template_bmuvt6i', form.current, {
            publicKey: 'N969MZq5PJMFQNcCB',
        })
        .then(
            () => {
                handleSuccess();
                e.target.reset();
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };

    useEffect(() => {
        if (showToast) {
            const interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev <= 0) {
                        clearInterval(interval);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 30); 

            return () => clearInterval(interval);
        }
    }, [showToast]);

    return (
        <div>
            {needNavBar && <NavBar/>}
            <div className="flex items-center justify-center mb-36" style={{ minHeight: `${viewHeight}vh`}}>
                <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg relative">
                    <h1 className="text-2xl font-bold mb-2 text-center">Contact Me!</h1>
                    <h2 className="text-sm mb-6 text-center">Feel free to contact me directly at through this form or through the links <b>below</b>.</h2>
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
                            placeholder="Message"
                            rows="4"
                            required
                            className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                        </div>

                        <div className="flex justify-between">
                        <button
                            type="submit"
                            className="px-6 py-3 bg-blue-500 text-white rounded-3xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <div className="flex items-center">
                                <span className="font-semibold">Submit</span>
                                <SendIcon className="ml-2 text-gray-300" sx={{ fontSize: 20 }} />
                            </div>
                        </button>
                        <div className="flex justify-center items-center">
                            <div className="flex items-center space-x-6">
                                <a href="mailto:ethanclin03@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <IconButton className="hover:bg-gray-200">
                                        <GoogleIcon className="text-red-500" style={{ fontSize: 26 }}/>
                                    </IconButton>
                                </a>

                                <a href="https://www.linkedin.com/in/ethanlin03" t  arget="_blank" rel="noopener noreferrer">
                                    <IconButton className="hover:bg-gray-200">
                                        <LinkedInIcon className="text-blue-600" style={{ fontSize: 30 }}/>
                                    </IconButton>
                                </a>

                                <a href="https://www.github.com/ethanlin03" target="_blank" rel="noopener noreferrer">
                                    <IconButton>
                                        <GitHubIcon className="text-gray-700" style={{ fontSize: 26 }}/>
                                    </IconButton>
                                </a>
                            </div>
                        </div>
                        </div>
                    </form>
                    {showToast && (
                    <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white max-w-[190px] px-4 py-2 rounded shadow-lg z-20"
                    >
                        Message was sent!
                        <button
                            className="ml-2 text-sm text-white font-bold"
                            onClick={() => setShowToast(false)}
                        >
                            ✕
                        </button>
                        <div
                            className="h-1 bg-white rounded mt-2"
                            style={{
                                width: `${progress}%`,
                                transition: "width 0.03s linear",
                            }}
                        />
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactPage;