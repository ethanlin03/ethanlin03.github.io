import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { motion } from "framer-motion";

const JobIcon = ({ jobTitle, company, description, date, leftOrRight, imgsrc }) => {
    return (
        <div>
            <div className="block 2xl:hidden">
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.2, ease: "easeOut" }} viewport={{ once: false }} className="flex flex-row">
                    <div 
                        className="bg-gray-100 bg-opacity-95 max-w-[90vw] h-auto min-h-[260px] shadow-xl z-10 rounded-md p-4 border" 
                        style={{ boxShadow: '0 4px 4px rgba(0, 0, 0, 0.15)' }}
                    >
                        <div className="flex flex-row justify-between">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.0, ease: "easeOut" }}
                                viewport={{ once: false }}
                            >
                                <h1 className="text-md lg:text-xl font-bold">{jobTitle}</h1>
                                <h1 className="text-sm lg:text-base font-semibold italic">{company}</h1>
                                <h2 className="text-xs lg:text-sm text-gray-500 italic mb-4">{date}</h2>
                            </motion.div>
                            <img src={imgsrc} className="h-12 aspect-[1] rounded-full bg-white p-1"/>
                        </div>
                        
                        <span className="mb-4 text-sm"> {description} </span>
                    </div>
                </motion.div>
            </div>
            {leftOrRight === "right" ? (
                <div className="hidden 2xl:flex relative flex-row items-top left-[34px]">
                    <motion.span 
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: false }}
                        className="whitespace-nowrap font-semibold text-right mt-8 w-[400px]"
                    >
                        {date}
                    </motion.span>

                    <div className="bg-white border-gray-300 border-4 rounded-full flex items-center justify-center h-[90px] w-[90px] ml-8 mr-10">
                        <motion.div 
                            initial={{ opacity: 0 }} 
                            whileInView={{ opacity: 1 }} 
                            transition={{ duration: 1.2, ease: "linear" }} 
                            viewport={{ once: false }} 
                            className="bg-white border-gray-200 shadow-md border rounded-full flex items-center justify-center h-16 w-16"
                        >
                            <img src={imgsrc} className="h-12 aspect-[1] rounded-full bg-white p-1"/>
                        </motion.div>
                    </div>

                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.2, ease: "easeOut" }} viewport={{ once: false }} className="flex flex-row">
                        <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-r-[10px] border-t-transparent border-b-transparent border-r-gray-500 mt-8"/>
                        
                        <div 
                            className="bg-gray-100 bg-opacity-95 w-[450px] h-[260px] shadow-xl z-10 rounded-md p-4 border" 
                            style={{ boxShadow: '0 4px 4px rgba(0, 0, 0, 0.15)' }}
                        >
                            <div className="flex flex-row justify-between">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1.0, ease: "easeOut" }}
                                    viewport={{ once: false }}
                                >
                                    <h1 className="text-xl font-bold">{jobTitle}</h1>
                                    <h1 className="text-base font-semibold mb-4 italic">{company}</h1>
                                </motion.div>
                            </div>
                            
                            <span className="mb-4 text-sm"> {description} </span>
                        </div>
                    </motion.div>
                </div>
            ) : (
                <div className="hidden 2xl:flex relative flex-row items-top right-[34px]">
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.2, ease: "easeOut" }} viewport={{ once: false }} className="flex flex-row">
                        <div 
                            className="bg-gray-100 bg-opacity-95 w-[450px] h-[260px] shadow-xl z-10 rounded-md p-4 border"
                            style={{ boxShadow: '0 4px 4px rgba(0, 0, 0, 0.15)' }}
                        >
                            <div className="flex flex-row justify-between">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1.0, ease: "easeOut" }}
                                    viewport={{ once: false }}
                                >
                                    <h1 className="text-xl font-bold">{jobTitle}</h1>
                                    <h1 className="text-base font-semibold mb-4 italic">{company}</h1>
                                </motion.div>
                            </div>
                            <span className="mb-4 text-sm">{description}</span>
                        </div>

                        <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[10px] border-t-transparent border-b-transparent border-l-gray-500 mt-8"/>
                    </motion.div>

                    <div className="bg-white border-gray-300 border-4 rounded-full flex items-center justify-center h-[90px] w-[90px] ml-10 mr-8">
                        <motion.div 
                            initial={{ opacity: 0 }} 
                            whileInView={{ opacity: 1 }} 
                            transition={{ duration: 1.2, ease: "linear" }} 
                            viewport={{ once: false }} 
                            className="bg-white border-gray-200 shadow-md border rounded-full flex items-center justify-center h-16 w-16"
                        >
                            <img src={imgsrc} className="h-12 aspect-[1] rounded-full bg-white p-1"/>
                        </motion.div>
                    </div>

                    <motion.span 
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: false }}
                        className="whitespace-nowrap font-semibold mt-8 w-[400px]"
                    >
                        {date}
                    </motion.span>
                </div>
            )}
        </div>
    );
};

export default JobIcon;