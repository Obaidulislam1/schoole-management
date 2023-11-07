import { Link } from "react-router-dom";

const ParentInfo = () => {
    return (
        <div className="w-full lg:w-8/12 shadow-2xl m-auto p-6">
            <h1 className="text-2xl text-black text-center mb-7">Parent Information</h1>
            <form action="">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                    <input type="text" placeholder="Father Name" className="input text-black w-full border-black bg-white" />
                    <input type="text" placeholder="Father Phone Number" className="input text-black w-full border-black bg-white" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <input type="text" placeholder="Father Profession" className="input text-black w-full border-black bg-white"/>
                   <div>
                    <input type="file" title="Father Image" id="file-input" className="file-input file-input-bordered w-full max-w-xs bg-white mb-7" />
                   </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                    <input type="text" placeholder="Mother Name" className="input text-black w-full border-black bg-white" />
                    <input type="text" placeholder="Mother Phone Number" className="input text-black w-full border-black bg-white" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <input type="text" placeholder="Mother Profession" className="input text-black w-full border-black bg-white"/>
                   <div>
                    <input type="file" title="Mother Image" id="file-input" className="file-input file-input-bordered w-full max-w-xs bg-white mb-7" />
                   </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                    <input type="text" placeholder="Parent Name" className="input text-black w-full border-black bg-white" />
                    <input type="text" placeholder="Parent Phone Number" className="input text-black w-full border-black bg-white" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <input type="text" placeholder="Parent Profession" className="input text-black w-full border-black bg-white"/>
                   <div>
                    <input type="file" title="Parent Image" id="file-input" className="file-input file-input-bordered w-full max-w-xs bg-white mb-7"/>
                   </div>
                </div>
                <div className="flex justify-between">
                    <Link to='/academicInfo'>
                    <button
                        type="button"
                        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                        Back
                    </button>
                    </Link>
                   <Link to='/parentInfo'>
                   <button
                        type="button"
                        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                        Submit
                    </button>
                   </Link>
                </div>
            </form>
        </div>
    );
};

export default ParentInfo;