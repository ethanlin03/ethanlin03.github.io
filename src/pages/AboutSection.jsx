import NavBar from "../components/NavBar";
import me from "../assets/me.jpg";
import uci from "../assets/uci.png";
import mtsac from "../assets/mtsac.png";
import { FaGoogle, FaLinkedin, FaGithub } from "react-icons/fa";
import Technologies from "../components/Technologies";
import { motion } from "framer-motion";

const AboutSection = () => {
    return (
        <div>
            <div className="max-w-3xl mx-auto">
                <div className="container mx-auto max-w-[90vw] flex flex-col sm:flex-row items-center gap-4 justify-center mb-6">
                    <div className="flex flex-col items-center">
                        <motion.img
                            initial={{ opacity: 0, y: -40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            src={me} 
                            className="w-[80%] md:w-[80%] aspect-square object-cover rounded-full z-0"
                            alt="Ethan"
                        />
                        <motion.div 
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="flex items-center justify-center space-x-6 relative bg-white px-6 py-2 max-w-[250px] border border-black border-opacity-30 shadow-lg rounded-md z-10 -mt-8 sm:-mt-6"
                        >
                            <motion.a 
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }}
                                href="mailto:ethanclin03@gmail.com" target="_blank" rel="noopener noreferrer"
                            >
                                <div className="p-2 rounded-full hover:bg-gray-200 hover:scale-110 transition-transform">
                                    <FaGoogle className="text-red-500 text-[22px] sm:text-[26px]"/>
                                </div>
                            </motion.a>

                            <motion.a 
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }}
                                href="https://www.linkedin.com/in/ethanlin03" target="_blank" rel="noopener noreferrer"
                                
                            >
                                <div className="p-2 rounded-full hover:bg-gray-200 hover:scale-110 transition-transform">
                                    <FaLinkedin className="text-blue-600 text-[26px] sm:text-[30px]" />
                                </div>
                            </motion.a>

                            <motion.a 
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }}
                                href="https://www.github.com/ethanlin03" target="_blank" rel="noopener noreferrer"
                            >
                                <div className="p-2 rounded-full hover:bg-gray-200 hover:scale-110 transition-transform">
                                    <FaGithub className="text-gray-700 text-[24px] sm:text-[28px]"/>
                                </div>
                            </motion.a>
                        </motion.div>
                    </div>
                    <motion.div 
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative bg-white bg-opacity-95 p-4 max-w-screen sm:max-w-md shadow-lg rounded-md"
                        style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
                    >
                        <motion.h1 
                            initial={{ opacity: 0, y: -40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="text-2xl font-bold mb-2"
                        >
                            About Me
                        </motion.h1>
                        <p className="mb-4">
                            Hi, I'm Ethan! I'm a Computer Science student at the University of California, Irvine. 
                            My journey for programming started in 2015, where my curiosity for games met my love 
                            for creativity and creation.
                        </p>
                        <p className="mb-4">
                            I've been able to use my skills to create a Rock Paper Scissors AI, 
                            to an application, KapeChat, where students are able to connect with mentees and foster a professional community. I even spearheaded KapeChat's in-app realtime messaging system. Through each project, I've been able to build upon my technical skills while pushing 
                            my innovativeness and creativity. Let's connect and create fresh, exciting applications 
                            for the world!
                        </p>
                    </motion.div>                        
                </div>
                <div className="mx-auto container px-4 pb-8 mb-10">
                    <motion.h1 
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold mb-2"
                    >
                        Education
                    </motion.h1>

                    <div className="flex flex-col sm:flex-row items-start mb-4">
                        <img src={uci} alt="UCI Icon" className="w-12 h-12 mr-4 mt-2" />
                        <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:justify-between">
                                <h2 className="text-lg font-semibold">University of California, Irvine</h2>
                                <p className="text-base">Sep. 2023 – Present</p>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:justify-between">
                                <p className="text-base text-gray-600">Bachelor of Science in Computer Science</p>
                                <p className="text-sm">Irvine, CA</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start mb-8">
                        <img src={mtsac} alt="MtSac Icon" className="w-12 h-12 mr-4 mt-2" />
                        <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:justify-between">
                                <h2 className="text-lg font-semibold">Mount San Antonio College</h2>
                                <p className="text-base">Aug. 2021 – June 2023</p>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:justify-between">
                                <p className="text-base text-gray-600">Computer Science</p>
                                <p className="text-sm">Walnut, CA</p>
                            </div>
                        </div>
                    </div>
                    <Technologies/>
                </div>
            </div>
        </div>
    );  
};
export default AboutSection;