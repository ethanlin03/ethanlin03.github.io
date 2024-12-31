import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

const JobIcon = ({ jobTitle, company, description, date, leftOrRight }) => {
    return (
        leftOrRight === "left" ?
        (
            <div>
                <div 
                    className="bg-white bg-opacity-95 w-[400px] h-[200px] shadow-lg z-10 rounded-md left-40 absolute p-4"
                    style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
                >
                    <h1 className="text-xl font-bold">{jobTitle}</h1>
                    <h1 className="text-lg font-semibold mb-4 italic">{company}</h1>
                    <p className="mb-4">
                        Placeholder
                    </p>
                </div>
                <div className="bg-white border-gray-300 border-4 rounded-full flex items-center justify-center h-[90px] w-[90px]">
                    <div className="bg-white border-gray-200 shadow-md border rounded-full flex items-center justify-center h-16 w-16">
                        <WorkOutlineIcon className="bg-white rounded-full h-10 w-10" />
                    </div>
                </div>
            </div>
        ) : (
            <div>

            </div>
        )
    );
};

export default JobIcon;