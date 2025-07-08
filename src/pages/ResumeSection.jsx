import NavBar from "../components/NavBar";
import resume from "../assets/ethan_resume.pdf";
import { motion } from "framer-motion";

const ResumeSection = ({ needNavBar }) => {
    return (
        <div>
            {needNavBar && <NavBar/>}
            <motion.h1 
                initial={{ opacity: 0, y: -60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center font-bold text-[26px] hidden sm:block"
            >
                Resume
            </motion.h1>
            <div className="mt-4 w-full h-[calc(100vh-100px)] flex justify-center items-center p-6 mb-20">
                <div className="max-w-2xl mx-auto w-full h-full flex items-center justify-center">
                    <iframe 
                        className="w-full h-full border-0 hidden sm:block"
                        src={`${resume}`}
                        title="Resume"
                    />
                    <a 
                        href="https://drive.google.com/file/d/1EZr_fRK5qhArOi1WfsbA-0d9S5FE-47a/view?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="py-4 px-8 max-w-xs rounded-full hover:bg-gray-200 hover:scale-125 transition bg-blue-500 inline-block sm:hidden text-white text-lg font-semibold"
                    >
                        View Resume
                    </a>
                </div>
            </div>
        </div>
    )
};

export default ResumeSection;