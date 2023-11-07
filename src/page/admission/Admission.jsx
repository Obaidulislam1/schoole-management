import { Link } from "react-router-dom";

const Admission = () => {
    return (
        <div className="shadow-2xl shadow-slate-500 card w-full md:w-8/12 m-auto p-6">
            <h1 className="text-2xl text-black text-center font-serif mb-5">Basic Information</h1>
            <form action="" className="w-full">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-5">
                <input type="text" placeholder="First Name" className="input text-black border-black bg-white" />
                <input type="text" placeholder="Middle Name" className="input text-black border-black bg-white" />
                <input type="text" placeholder="Last Name" className="input text-black border-black bg-white" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-5">
                <input type="text" placeholder="Admission Date" className="input text-black border-black bg-white" />
                <input type="text" placeholder="Date Of Birth" className="input text-black border-black bg-white" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Blood Group" className="input text-black border-black bg-white" />
                <input type="text" placeholder="Religion" className="input text-black border-black bg-white" />
                <input type="text" placeholder="Phone" className="input text-black border-black bg-white" />
                <input type="text" placeholder="Email" className="input text-black border-black bg-white" />
                </div>
                <input type="text" placeholder="Birth Certificate Id" className="input text-black border-black bg-white w-full mt-5" />
                <div className="flex justify-end mt-5">
               <Link to='/academicInfo'>
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

export default Admission;