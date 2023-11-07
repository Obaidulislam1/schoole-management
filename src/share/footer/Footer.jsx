import { IoIosTabletPortrait } from 'react-icons/io';

const Footer = () => {
    return (
        <div className='w-full m-auto grid lg:grid-cols-3 grid-cols-1 gap-3 p-4 text-white bg-sky-400 mt-5'>
        <div><p className='text-center text-xl my-2'>© All rights reserved © 2023 Educational</p></div>
        <div className='flex gap-3 justify-between m-auto'>
            <div className='p-3 rounded-full bg-sky-500 hover:rotate-180'>
            <IoIosTabletPortrait className=''/>
            </div>
            <div className='p-3 rounded-full bg-sky-500 hover:rotate-180'>
            <IoIosTabletPortrait className=''/>
            </div>
            <div className='p-3 rounded-full bg-sky-500 hover:rotate-180'>
            <IoIosTabletPortrait className=''/>
            </div>
            <div className='p-3 rounded-full bg-sky-500 hover:rotate-180'>
            <IoIosTabletPortrait className=''/>
            </div>
            <div className='p-3 rounded-full bg-sky-500 hover:rotate-180'>
            <IoIosTabletPortrait className=''/>
            </div>
        </div>
        <div><h3 className='text-center my-2 text-xl'>Design & Developed BY <span className='text-black'>Obaidul Islam</span></h3>
        <h1 className='text-black text-center'>Contact : 01967385283</h1>
        </div>
    </div>
    );
};

export default Footer;