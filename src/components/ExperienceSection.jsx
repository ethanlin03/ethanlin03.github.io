import NavBar from "../components/NavBar";
import JobIcon from "../components/JobIcon";
import { motion } from "framer-motion";
import WorkUp from "../assets/workup.png";
import NSF from "../assets/nsf.png";
import MakeAWish from "../assets/makeawish.png";
import Walgreens from "../assets/walgreens.png";
import Fox from "../assets/fox.png";
import Panasonic from "../assets/panasonic.png";

const ExperienceSection = ({ needNavBar }) => {
    return (
        <section id="experience" className="scroll-mt-28">
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
            <div className="max-w-screen min-h-screen mx-auto px-4 py-8 mt-10 mb-32 relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 border-l-2 border-gray-300 z-0" />
                <div className="flex flex-col items-center gap-12 sm:gap-20 2xl:gap-28 z-10">
                    <JobIcon jobTitle="MTS Tester" company="Panasonic Avionics Corporation" date="December 2025 - Present" leftOrRight="left" imgsrc={Panasonic} description={
                        <motion.ul 
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: false }} 
                            className="list-disc pl-5"
                        >
                            <li>
                                Performing deep-dive technical triage on system failures through analyzing Linux kernel logs, SQL database entries, and etc.
                            </li>
                            <li>
                                Managing test racks to simulate full aircraft cabin environments through validation of the integration of LRUs, seatback displays, and other hardware
                            </li>
                            <li>
                                Working on end-to-end lifecycle testing within Jira, from initial setup to closure and customer delivery.
                            </li>
                        </motion.ul>}/>
                    <JobIcon jobTitle="Product Quality Analyst" company="Fox Corporation" date="August 2025 - December 2025" leftOrRight="right" imgsrc={Fox} description={
                        <motion.ul 
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: false }} 
                            className="list-disc pl-5"
                        >
                            <li>
                                Engineered and optimized comprehensive cross-platform automated test suites using Appium, Playwright, and CodeceptJS
                            </li>
                            <li>
                                Manually reviewed AI-generated video clips to ensure accuracy, quality, and alignment with product standards
                            </li>
                            <li>
                                Logged bugs and collaborated with engineering teams to validate fixes and ensured smooth regression testing cycles
                            </li>
                        </motion.ul>}/>
                    <JobIcon jobTitle="Software Quality Assurance Intern" company="WorkUp" date="October 2024 - February 2025" leftOrRight="left" imgsrc={WorkUp} description={
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
                                Engaged daily in QA procedures/tests to improve the IOS/Web versions of our app to ensure a flawless experience
                            </li>
                            <li>
                                Wrote in-depth reports to aid developer understanding and fostered a culture of high engineering standards
                            </li>
                        </motion.ul>}/>
                    <JobIcon jobTitle="Development Intern" company="Make-A-Wish" date="September 2024 - November 2024" leftOrRight="right" imgsrc={MakeAWish} description={
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
                    <JobIcon jobTitle="Research Intern" company="National Science Foundation" date="June 2022 - August 2022" leftOrRight="left" imgsrc={NSF} description={
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
                    <JobIcon jobTitle="Customer Service Associate" company="Walgreens" date="January 2022 - September 2023" leftOrRight="right" imgsrc={Walgreens} description={
                        <motion.ul 
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: false }} 
                            className="list-disc pl-5"
                        >
                            <li>
                                Met all customers’ expectations and concerns while exceeding the expectations of customer service
                            </li>
                            <li>
                                Registered customer purchases/returns on an assigned cash register
                            </li>
                            <li>
                                Kept store well-merchandised and took inventory/records
                            </li>
                            <li>
                                Fulfilled and delivered online orders accurately and quickly
                            </li>
                            <li>
                                Assisted in the photo area with digital passport photo service, poster print, picture print, etc.
                            </li>
                        </motion.ul>}/>
                </div>
            </div>
        </section>
    )
};

export default ExperienceSection;