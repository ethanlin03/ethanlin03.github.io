import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import NavBar from "../components/NavBar";
import { FaGoogle, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const ContactPage = ( { needNavBar, viewHeight }) => {
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
                <div className="max-w-[80vw] sm:max-w-screen mx-auto p-8 bg-white rounded-lg shadow-lg">
                    <h1 className="text-xl sm:text-2xl font-bold mb-2 text-center">Contact Me!</h1>
                    <h2 className="text-xs sm:text-sm mb-6 text-center">Feel free to contact me directly at through this form or through the links <b>below</b>.</h2>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="mb-4">
                        <input
                            type="text"
                            id="name"
                            name="user_name"
                            placeholder="Your name"
                            required
                            className="sm:mt-1 p-2 px-3 sm:p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-base"
                        />
                        </div>

                        <div className="mb-4">
                        <input
                            type="email"
                            id="email"
                            name="user_email"
                            placeholder="Your email"
                            required
                            className="sm:mt-1 p-2 px-3 sm:p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-base"
                        />
                        </div>

                        <div className="mb-4">
                        <textarea
                            id="message"
                            name="user_message"
                            placeholder="Message"
                            rows="4"
                            required
                            className="sm:mt-1 p-2 px-3 sm:p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-base"
                        ></textarea>
                        </div>

                        <div className="flex justify-between">
                        <button
                            type="submit"
                            className="px-3 py-2 sm:px-6 sm:py-3 bg-blue-500 text-white rounded-3xl hover:bg-blue-600 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <div className="flex items-center">
                                <span className="font-semibold text-sm sm:text-base">Submit</span>
                                <IoSend className="ml-2 text-gray-300"/>
                            </div>
                        </button>
                        <div className="flex justify-center items-center">
                            <div className="flex items-center space-x-2 sm:space-x-6">
                                <a href="mailto:ethanclin03@gmail.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-200 hover:scale-125 transition">
                                    <FaGoogle className="text-red-500 text-[18px] sm:text-[22px]"/>
                                </a>

                                <a href="https://www.linkedin.com/in/ethanlin03" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-200 hover:scale-125 transition">
                                    <FaLinkedin className="text-blue-600 text-[22px] sm:text-[26px]"/>
                                </a>

                                <a href="https://www.github.com/ethanlin03" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-200 hover:scale-125 transition">
                                    <FaGithub className="text-gray-700 text-[20px] sm:text-[24px]"/>
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