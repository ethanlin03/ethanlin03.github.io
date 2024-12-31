import NavBar from "../components/NavBar";
import JobIcon from "../components/JobIcon";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

const ExperiencePage = () => {
    return (
        <div>
            <NavBar/>
            <div className="container mx-auto px-4 py-8 flex justify-center mt-40">
                <div className="border-2 border-gray-300 h-[80rem] z-0"/>
                <div className="absolute top-30 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-40">
                    <JobIcon jobTitle="Software Quality Assurance Intern" company="WorkUp" leftOrRight="left"/>
                </div>
            </div>
        </div>
    )
};

export default ExperiencePage;