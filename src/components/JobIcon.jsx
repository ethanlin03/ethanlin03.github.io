import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

const JobIcon = ({ jobTitle, company, description, date, leftOrRight }) => {
    return (
        <div>
            {leftOrRight === "right" ? (
                <div className="relative flex flex-row items-top left-[94px]">
                    <span className="whitespace-nowrap font-semibold text-right mt-8">
                        {date}
                    </span>
                    <div className="bg-white border-gray-300 border-4 rounded-full flex items-center justify-center h-[90px] w-[90px] ml-8 mr-10">
                        <div className="bg-white border-gray-200 shadow-md border rounded-full flex items-center justify-center h-16 w-16">
                            <WorkOutlineIcon className="bg-white rounded-full h-10 w-10" />
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-r-[10px] border-t-transparent border-b-transparent border-r-gray-500 mt-8"/>
                        
                        <div 
                            className="bg-white bg-opacity-95 w-[400px] h-[200px] shadow-xl z-10 rounded-md p-4 border"
                            style={{ boxShadow: '0 4px 4px rgba(0, 0, 0, 0.15)' }}
                        >
                            <h1 className="text-xl font-bold">{jobTitle}</h1>
                            <h1 className="text-lg font-semibold mb-4 italic">{company}</h1>
                            <p className="mb-4">Placeholder</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="relative flex flex-row items-top right-[94px]">
                    <div className="flex flex-row">
                        <div 
                            className="bg-white bg-opacity-95 w-[400px] h-[200px] shadow-xl z-10 rounded-md p-4 border"
                            style={{ boxShadow: '0 4px 4px rgba(0, 0, 0, 0.15)' }}
                        >
                            <h1 className="text-xl font-bold">{jobTitle}</h1>
                            <h1 className="text-lg font-semibold mb-4 italic">{company}</h1>
                            <p className="mb-4">Placeholder</p>
                        </div>

                        <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[10px] border-t-transparent border-b-transparent border-l-gray-500 mt-8"/>
                    </div>

                    <div className="bg-white border-gray-300 border-4 rounded-full flex items-center justify-center h-[90px] w-[90px] ml-10 mr-8">
                        <div className="bg-white border-gray-200 shadow-md border rounded-full flex items-center justify-center h-16 w-16">
                            <WorkOutlineIcon className="bg-white rounded-full h-10 w-10" />
                        </div>
                    </div>

                    <span className="whitespace-nowrap font-semibold mt-8">
                        {date}
                    </span>
                </div>
            )}
        </div>
    );
};

export default JobIcon;