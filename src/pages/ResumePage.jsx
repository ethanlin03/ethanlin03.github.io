import NavBar from "../components/NavBar";
import resume from "../assets/ethan_resume.pdf";

const ResumePage = () => {
    return (
        <div>
            <NavBar/>
            <div className="mt-20 w-full h-[calc(100vh-100px)] flex justify-center items-center p-6">
                <div className="max-w-2xl mx-auto w-full h-full">
                    <iframe 
                        className="w-full h-full border-0"
                        src={`${resume}`}
                        title="Resume"
                    />
                </div>
            </div>
            <div className="p-20">
                reaskdfjasldfjkas
            </div>
        </div>
    )
};

export default ResumePage;