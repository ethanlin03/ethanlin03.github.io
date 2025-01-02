import NavBar from "../components/NavBar";
import resume from "../assets/ethan_resume.pdf";

const ResumePage = () => {
    return (
        <div>
            <NavBar/>
            <h1 className="text-center font-bold text-[26px] mt-32">
                Resume
            </h1>
            <div className="mt-4 w-full h-[calc(100vh-100px)] flex justify-center items-center p-6">
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