import NavBar from "../components/NavBar";
import JobIcon from "../components/JobIcon";

const ExperiencePage = ({ needNavBar }) => {
    return (
        <div>
            {needNavBar && <NavBar/>}
            <h1 className="text-center font-bold text-[26px]">
                Experience
            </h1>
            <div className="container mx-auto px-4 py-8 flex justify-center mt-10 mb-20">
                <div className="border-2 border-gray-300 h-[1120px] z-0"/>
                <div className="absolute top-30 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-28">
                    <JobIcon jobTitle="Software Quality Assurance Intern" company="WorkUp" date="October 2024 - Present" leftOrRight="left" description={
                        <ul class="list-disc pl-5">
                            <li>
                                Developing features like "double clicking to like" in React, JavaScript, and FireBase to improve WorkUp’s app and upon the UI before launch
                            </li>
                            <li>
                                Gained familiarity with QA procedures and regularly QA tested the IOS/Web version of WorkUp
                            </li>
                            <li>
                                Writing in-depth reports for developers to understand reasons for crashes and fostering a culture of high standards
                            </li>
                        </ul>}/>
                    <JobIcon jobTitle="Development Intern" company="Make-A-Wish" date="September 2024 - November 2024" leftOrRight="right" description={
                        <ul class="list-disc pl-5">
                            <li>
                                Worked and gained familiarity with SalesForce to help keep track of sponsorships and maintain relationships
                            </li>
                            <li>
                                Handled the outreach of sponsorships and events while also curating Make-A-Wish kid stories
                            </li>
                            <li>
                                Using Canva with other creative applications to design and create Make-A-Wish stories along with showcases of events
                            </li>
                        </ul>}/>
                    <JobIcon jobTitle="Research Intern" company="National Science Foundation" date="June 2022 - August 2022" leftOrRight="left" description={
                        <ul class="list-disc pl-5">
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
                        </ul>}/>
                    <div class="w-8 h-8 bg-gray-300 rounded-full"></div>
                </div>
            </div>
        </div>
    )
};

export default ExperiencePage;