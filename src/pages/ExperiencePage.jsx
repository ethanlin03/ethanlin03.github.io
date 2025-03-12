import NavBar from "../components/NavBar";
import JobIcon from "../components/JobIcon";
import { motion } from "framer-motion";

const ExperiencePage = ({ needNavBar }) => {
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
                Experience
            </motion.h1>
            <div className="container mx-auto px-4 py-8 flex justify-center mt-10 mb-20">
                <div className="border-2 border-gray-300 h-[1120px] z-0"/>
                <div className="absolute top-30 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-28">
                    <JobIcon jobTitle="Software Quality Assurance Intern" company="WorkUp" date="October 2024 - February 2025" leftOrRight="left" description={
                        <motion.ul 
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: false }} 
                            className="list-disc pl-5"
                        >
                            <li>
                                Utilized React, JavaScript, and FireBase to develop features like double-clicking for video likes and AI sections of WorkUp’s app whilst helping ensure seamless UI
                            </li>
                            <li>
                                Engaged daily in QA procedures/tests to improve the IOS/Web versions of our app to ensure flawless experience
                            </li>
                            <li>
                                Writing in-depth reports for other developers to understand crashes and fostering a culture of high standards
                            </li>
                        </motion.ul>}/>
                    <JobIcon jobTitle="Development Intern" company="Make-A-Wish" date="September 2024 - November 2024" leftOrRight="right" description={
                        <motion.ul 
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: false }} 
                            className="list-disc pl-5"
                        >
                            <li>
                                Worked and gained familiarity with SalesForce to help keep track of sponsorships and maintain relationships
                            </li>
                            <li>
                                Handled the outreach of sponsorships and events while also curating Make-A-Wish kid stories
                            </li>
                            <li>
                                Using Canva with other creative applications to design and create Make-A-Wish stories along with showcases of events
                            </li>
                        </motion.ul>}/>
                    <JobIcon jobTitle="Research Intern" company="National Science Foundation" date="June 2022 - August 2022" leftOrRight="left" description={
                        <motion.ul 
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: false }} 
                            className="list-disc pl-5"
                        >
                            <li>
                                Developed a set of procedures that basic programmers can follow to analyze assembly and binary
                            </li>
                            <li>
                                Worked in x86 and ARM architectures and gained familiarity with said architectures
                            </li>
                            <li>
                                Analyzed assembly and binary through obfuscation and basic encryption
                            </li>
                            <li>
                                Collaborated with peers to meet weekly goals while demonstrating leadership when groupmates needed help
                            </li>
                        </motion.ul>}/>
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                </div>
            </div>
        </div>
    )
};

export default ExperiencePage;