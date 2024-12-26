import NavBar from "../components/NavBar";
import resume from "../assets/ethan_resume.pdf";

const ResumePage = () => {
    return (
        <div>
            <NavBar/>
            <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center p-6">
                <div className="max-w-2xl mx-auto w-full h-full">
                    <iframe 
                        className="w-full h-full"
                        src={`${resume}#view=FitH`}
                        title="Resume"
                    />
                </div>
            </div>
        </div>
    )
};

export default ResumePage;