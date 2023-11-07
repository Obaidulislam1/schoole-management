import { useState } from 'react';
import image3 from '../../assets/observerbd.com_1646312228-removebg-preview.png';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import  image4 from '../../assets/slogan.png';

const Nabvar = () => {
    const [open, setOpen] = useState(false);
    let time = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(time);

const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
};

setInterval(UpdateTime, 1000);

    // let date = new Date().toLocaleDateString();

    return (
        <div className='mt-5'>
        <div className='flex lg:justify-between justify-center'>
            <div>
            <div>
            <h1 className='text-black mb-3 text-xl mr-2 hidden md:block'>{ctime}</h1>
            </div>
            <img src={image4} alt="" className=' h-10 hidden md:block'/>
            </div>
            <div>
            <h1 className='text-black font-semibold'>ডঃ আব্দুল মজিদ তালুকদার ডিগ্রী কলেজ</h1>
            <h1 className='text-black text-center'>রূপসী, কামাল খান, জামালপুর </h1>
            <h1 className='text-black text-center'>স্থাপিত : 1999</h1>
            </div>
            <img src={image3} alt="" className='hidden md:block h-24' />
        </div>

        {/* Navbar section */}

        <div className='bg-white'>  
        
            <div className='md:flex items-center justify-between py-4 md:px-10 px-7 lg:p-0'>
                <button onClick={() => setOpen(!open)} className='text-2xl lg:text-none md:hidden cursor-pointer text-black'>
                    <ion-icon name={open ? 'close' : 'menu'}><AiOutlineMenu/></ion-icon>
                </button>
            </div>

            <ul className={`md:flex py-2 px-7 md:items-center my-3 justify-between w-full z-50 ${open ? 'block' : 'hidden'}`}>
                <li>
                    <Link to='/' className='text-black duration-500 font-bold'>প্রধান পাতা</Link>
                </li>
                <Link to='/krityStudent'>
                <li className=' text-black font-bold'>
                কৃতি শিক্ষার্থী
                </li>
                </Link>
                <Link to='/rutin'>
                <li className=' text-black font-bold'>
                রুটিন 
                </li>
                </Link>
                <Link to='/gallery'>
                <li className=' text-black font-bold'>
                সুবর্ণজয়ন্তী কর্ণার 
                </li>
                </Link>
                <Link to='/teachers'><li className=' text-black font-bold'>
                শিক্ষক
                </li></Link>                 
                <Link to='/login'><li className=' text-black font-bold'>
                লগইন
                </li></Link>                 
                <Link to='/admission'><li className=' text-black font-bold'>
                আবেদন
                </li></Link>                 
            </ul>
          </div>
    </div>
    );
};

export default Nabvar;