import { Link } from "react-router-dom";

const AcademicInfo = () => {

    return (
        <div className="card shadow-2xl w-full lg:w-8/12 m-auto p-6">
            <h1 className="text-2xl text-black text-center font-serif mb-5">Academic Info</h1>
            <form action="">
                <input type="text" placeholder="Previous Schoole Name" className="input text-black w-full border-black bg-white mb-3" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-3">
                    <input type="text" placeholder="Password" className="input text-black w-full border-black bg-white" />
                    <input type="text" placeholder="Confirm Password" className="input text-black w-full border-black bg-white" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-3">
                    <select className="select text-black border-black w-full bg-white">
                        <option disabled selected>Select Class</option>
                        <option>One</option>
                        <option>Two</option>
                        <option>Three</option>
                        <option>Four</option>
                        <option>Five</option>
                        <option>Six</option>
                        <option>Seven</option>
                        <option>Eight</option>
                        <option>Nine</option>
                        <option>Ten</option>
                    </select>
                    <select className="select text-black border-black w-full bg-white">
                        <option disabled selected>Select Academic Year</option>
                        <option>2022-2023</option>
                        <option>2023-2024</option>
                        <option>2024-2025</option>
                        <option>2025-2026</option>
                        <option>2026-2027</option>
                        <option>2027-2028</option>
                        <option>2028-2029</option>
                        <option>2029-2030</option>
                    </select>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-3">
                    <input type="text" placeholder="Student Present Address" className="input text-black w-full border-black bg-white"/>
                    <input type="text" placeholder="Student permanent Address" className="input text-black w-full border-black bg-white" />
                </div>
                <textarea className="textarea bg-white border-black w-full mb-3" placeholder="Reasons for changing schools"></textarea>
                <input type="file" placeholder="You can't touch this" className="file-input file-input-bordered w-full max-w-xs bg-white mb-7" />
                <div className="flex justify-between">
                    <Link to='/admission'>
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
                        Next
                    </button>
                   </Link>
                </div>
            </form>
        </div>
    );
};

export default AcademicInfo;