import NavBar from "../components/NavBar";
import resume from "../assets/ethan_resume.pdf";
import { motion } from "framer-motion";

const ResumePage = ({ needNavBar }) => {
    return (
        <div>
            {needNavBar && <NavBar/>}
            <motion.h1 
                initial={{ opacity: 0, y: -60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center font-bold text-[26px]"
            >
                Resume
            </motion.h1>
            <div className="mt-4 w-full h-[calc(100vh-100px)] flex justify-center items-center p-6 mb-20">
                <div className="max-w-2xl mx-auto w-full h-full">
                    <iframe 
                        className="w-full h-full border-0"
                        src={`${resume}`}
                        title="Resume"
                    />
                </div>
            </div>
        </div>
    )
};

export default ResumePage;