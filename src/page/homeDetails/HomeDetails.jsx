import image1 from '../../assets/photo-1592066575517-58df903152f2.jpeg';
import image2 from '../../assets/preview.png';
import image4 from '../../assets/James-Daily-Bangladesh-2204300838.jpg';
import image5 from '../../assets/AMY (600 x 337).jpg';
import { IoIosTabletPortrait } from 'react-icons/io';
import { Link } from 'react-router-dom';
import image3 from '../../assets/বঙ্গবন্ধু-শেখ-মুজিবুর-রহমান-removebg-preview.png';
import Carusale from '../../component/carusale/Carusale';

const HomeDetails = () => {
    return (
        <div>
        <Carusale></Carusale>
        <div className='grid lg:grid-cols-12 grid-cols-1 gap-5 mt-8'>
        <div className='grid lg:col-span-9'>
            <div>
                <div className=' bg-green-500 p-2'>
                    <h1 className='text-white text-xl'>প্রতিষ্ঠানের ইতিহাস</h1>
                </div>

                <div className=' text-black p-2'>
                        <img src={image1} alt="" className='lg:w-8/12 w-full p-3 float-left'/>
                        <div className='mt-2 text-justify'>
                        সুনামগঞ্জ জেলাধীন জগন্নাথপুরস্থ এক প্রাচীন জনপদের নাম ইসহাকপুর । এ গ্রামের সম্ভ্রান্ত ধর্মভীরু মুসলিম পরিবার সমূহের মধ্যে শীর্ষস্থানে অবস্থান খান পরিবারের । বংশমর্যাদায় যেমন শ্রেষ্ঠত্বের দাবীদার তেমনি শিক্ষা-দীক্ষায়, ধর্মভীরুতায়.সামাজিক আচার-অনুষ্ঠানে এ জনপদের অন্য সবের উপর রয়েছে এ পরিবারের অতুলনীয় সম্মান। যতদূর জানা যায় মরহুম দেলওয়ার খান ছিলেন এ পরিবারের একজন
                        সুনামগঞ্জ জেলাধীন জগন্নাথপুরস্থ এক প্রাচীন জনপদের নাম ইসহাকপুর । এ গ্রামের সম্ভ্রান্ত ধর্মভীরু মুসলিম পরিবার সমূহের মধ্যে শীর্ষস্থানে অবস্থান খান পরিবারের । বংশমর্যাদায় যেমন শ্রেষ্ঠত্বের দাবীদার তেমনি শিক্ষা-দীক্ষায়, ধর্মভীরুতায়.সামাজিক আচার-অনুষ্ঠানে এ জনপদের অন্য সবের উপর রয়েছে এ পরিবারের অতুলনীয় সম্মান। যতদূর জানা যায় মরহুম দেলওয়ার খান ছিলেন এ পরিবারের একজন শিক্ষিত ব্যক্তিতিনি যেমন ছিলেন বিস্তারিত...
                        </div>
                    
                </div>


            </div>

            <div>
                <div className='grid grid-cols-1 mt-10 lg:grid-cols-2 gap-5'>
                    <div>
                        <div className='bg-green-500 p-2'>
                            <h1 className='text-white text-xl'>অধ্যক্ষের বাণী</h1>
                        </div>
                        <div className='mt-3 gap-5 text-black'>
                            <img src={image4} alt="" className='w-full'/>
                            <p className='mt-4 text-justify'>
                                মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড, যশোর জনগণের দোরগোড়ায় শিক্ষা সেবা পৌঁছে দেবার লক্ষ্যে যাবতীয় কার্যাদী সম্পাদনে  ডিজিটাল প্রযুক্তি ব্যবহার  ও যশোর শিক্ষাবোর্ডের অধীন সকল প্রতিষ্ঠানের তথ্য অনলাইনে প্রেরণের ব্যবস্থা নেওয়া হয়েছে জেনে আমি আনন্দিত। বৃটিশ ঔপনিবেশিক আমলে মহৎপ্রাণ ব্যক্তি বাবু মথুরানাথ কুন্ডু মহাশয়ের প্রচেষ্টায় ১৮৫৬ খ্রিঃ প্রতিষ্ঠিত হয়েছিল ঐতিহ্যবাহী কুমারখালী এম এন পাইলট (মডেল) বিস্তারিত...
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className='bg-green-500 p-2'>
                            <h1 className='text-white text-xl'>উপধ্যক্ষের বাণী</h1>
                        </div>
                        <div className='mt-3 text-black'>
                            <img src={image5} alt="" className='w-full'/>

                            <p className='mt-4 text-justify'>
                                মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড, যশোর জনগণের দোরগোড়ায় শিক্ষা সেবা পৌঁছে দেবার লক্ষ্যে যাবতীয় কার্যাদী সম্পাদনে  ডিজিটাল প্রযুক্তি ব্যবহার  ও যশোর শিক্ষাবোর্ডের অধীন সকল প্রতিষ্ঠানের তথ্য অনলাইনে প্রেরণের ব্যবস্থা নেওয়া হয়েছে জেনে আমি আনন্দিত। বৃটিশ ঔপনিবেশিক আমলে মহৎপ্রাণ ব্যক্তি বাবু মথুরানাথ কুন্ডু মহাশয়ের প্রচেষ্টায় ১৮৫৬ খ্রিঃ প্রতিষ্ঠিত হয়েছিল ঐতিহ্যবাহী কুমারখালী এম এন পাইলট (মডেল) বিস্তারিত...
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-6 mt-10'>
                <div style={{ backgroundColor: "#ECECEC" }} className="border border-gray-500 border-t-0 ">
                    <div className=' bg-rose-400 p-2 text-white text-xl'>
                        <h1>ছাত্রছাত্রীদের তথ্য</h1>
                    </div>
                    <div className='flex justify-center items-center text-black pt-10 px-3 pb-8'>
                        <img src={image2} className='w-6/12' alt="" />
                        <div>
                            <div className='flex gap-1 items-center'>
                                <IoIosTabletPortrait />
                                <p> আসন সংখ্যা</p>
                            </div>
                            <div className='flex items-center gap-1 mt-1'>
                                <IoIosTabletPortrait />
                                <p>ভর্তি তথ্য</p>
                            </div>
                            <div className='flex items-center gap-1 mt-1'>
                                <IoIosTabletPortrait />
                                <p>নোটিশ</p>
                            </div>
                            <div className='flex items-center gap-1 mt-1'>
                                <IoIosTabletPortrait />
                                <p>রুটিন</p>
                            </div>
                            <div className='flex items-center gap-1 mt-1'>
                                <IoIosTabletPortrait />
                                <p>কৃতি শিক্ষার্থী</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: "#ECECEC" }} className="border border-gray-500 border-t-0">
                    <div className=' bg-green-500 p-2 text-white text-xl'>
                        <h1>শিক্ষকদের তথ্য</h1>
                    </div>
                    <div className='flex justify-center items-center text-black pt-10 px-3 pb-8'>
                        <img src={image2} className='w-1/2' alt="" />
                        <div>
                            <div className='flex gap-1 items-center'>
                                <IoIosTabletPortrait />
                                <p>শিক্ষকবৃন্দ</p>
                            </div>
                            <div className='flex items-center gap-1 mt-1'>
                                <IoIosTabletPortrait />
                                <p>শূণ্যপদের তালিকা</p>
                            </div>
                            <div className='flex items-center gap-1 mt-1'>
                                <IoIosTabletPortrait />
                                <p> প্রধান শিক্ষক</p>
                            </div>
                            <div className='flex items-center gap-1 mt-1'>
                                <IoIosTabletPortrait />
                                <p>কর্মকর্তা কর্মচারী</p>
                            </div>
                            <div className='flex items-center gap-1 mt-1'>
                                <IoIosTabletPortrait />
                                <p>পরিচালনা পরিষদ</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: "#ECECEC" }} className="border border-gray-500 border-t-0">
                    <div className=' bg-sky-400 p-2 text-white text-xl'>
                        <h1>ডাউনলোড</h1>
                    </div>
                    <div className='flex justify-center items-center text-black pt-10 px-3 pb-8'>
                        <img src={image2} className='w-6/12' alt="" />
                        <div>
                            <div className='flex gap-1 items-center'>
                                <IoIosTabletPortrait />
                                <p>১ম সেমিস্টার রুটিন</p>
                            </div>
                            <div className='flex items-center gap-1 mt-1'>
                                <IoIosTabletPortrait />
                                <p>এসএসসি পরীক্ষার রুটিন</p>
                            </div>
                            <div className='flex items-center gap-1 mt-1'>
                                <IoIosTabletPortrait />
                                <p>ছুটির নোটিশ ডাউনলোড</p>
                            </div>
                            <div className='flex items-center gap-1 mt-1'>
                                <IoIosTabletPortrait />
                                <p>ভর্তি ফরম ডাউনলোড</p>
                            </div>
                            <div className='flex items-center gap-1 mt-1'>
                                <IoIosTabletPortrait />
                                <p>পরীক্ষার রুটিন ডাউনলোড</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: "#ECECEC" }} className="border border-gray-500 border-t-0">
                    <div className=' bg-fuchsia-400 p-2 text-white text-xl'>
                        <h1>একাডেমীক তথ্য</h1>
                    </div>
                    <div className='flex justify-center items-center text-black pt-10 px-3 pb-8'>
                        <img src={image2} className='w-6/12' alt="" />
                        <div>
                            <div className='flex gap-1 items-center'>
                                <IoIosTabletPortrait />
                                <p>কক্ষ সংখ্যা</p>
                            </div>
                            <div className='flex items-center gap-1 mt-1'>
                                <IoIosTabletPortrait />
                                <p> আসন সংখ্যা</p>
                            </div>
                            <div className='flex items-center gap-1 mt-1'>
                                <IoIosTabletPortrait />
                                <p>ছুটির তালিকা</p>
                            </div>
                            <div className='flex items-center gap-1 mt-1'>
                                <IoIosTabletPortrait />
                                <p>মাল্টিমিডিয়া ক্লাসরুম</p>
                            </div>
                            <div className='flex items-center gap-1 mt-1'>
                                <IoIosTabletPortrait />
                                <p>যানবাহন সুবিধা</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='lg:col-span-3'>
            <div>
                <div className='flex gap-5 items-center bg-sky-400 p-2 w-full hover:bg-sky-500'>
                    <IoIosTabletPortrait className='text-black' />
                    <Link to='#' className='text-white font-semibold'>বঙ্গবন্ধু কর্নার</Link>
                </div>
                <div className='my-5'>
                    <img src={image3} alt="" className='m-auto' />
                </div>
                <div className='flex gap-5  items-center bg-sky-400 p-2 w-full hover:bg-sky-500'>
                    <IoIosTabletPortrait className='text-black' />
                    <Link to='#' className='text-white font-semibold'>ভর্তি তথ্য</Link>
                </div>
                <div className='flex gap-5 items-center bg-sky-400 p-2 w-full hover:bg-sky-500 mt-3'>
                    <IoIosTabletPortrait className='text-black' />
                    <Link to='#' className='text-white font-semibold'>ভর্তি ফরম</Link>
                </div>
                <div className='flex gap-5 items-center bg-sky-400 p-2 w-full hover:bg-sky-500 mt-3'>
                    <IoIosTabletPortrait className='text-black' />
                    <Link to='#' className='text-white font-semibold'>ফটোগ্যালারী</Link>
                </div>
                <div className='flex gap-5 items-center bg-sky-400 p-2 w-full hover:bg-sky-500 mt-3'>
                    <IoIosTabletPortrait className='text-black' />
                    <Link to='#' className='text-white font-semibold'>ভিডিও গ্যালারী</Link>
                </div>
            </div>

            <div style={{ backgroundColor: "#ECECEC" }} className='mt-9 h-[640px] border border-gray-500 border-t-0'>
                <div className='bg-sky-400 p-2 text-white text-xl'>
                    <h1>নোটিশ বোর্ড</h1>
                </div>
                <div className='p-4 text-black'>
                    <marquee direction="up"  height="500px">
                        <div className='flex gap-1 items-center'>
                            <IoIosTabletPortrait />
                            <Link to='#'>আগামী নির্বাচনী পরীক্ষা ৩১ মার্চের পরিবর্তে ৫ জুন অনুষ্ঠিত হবে</Link>
                        </div>
                        <div className='flex items-center gap-1 mt-4'>
                            <IoIosTabletPortrait />
                            <Link to=''>আগামী ১২ এপ্রিল বিজ্ঞান বিভাগের পরীক্ষা</Link>
                        </div>
                        <div className='flex items-center gap-1 mt-4'>
                            <IoIosTabletPortrait />
                            <Link to='#'>আগামী ৩১ মার্চের মধ্যে সকল ফি পরিশোধ করতে হবে</Link>
                        </div>
                        <div className='flex items-center gap-1 mt-4'>
                            <IoIosTabletPortrait />
                            <Link to='#'>স্কুলের ভিতর মোবাইল ব্যবহার করা সম্পূর্ণ নিষেধ</Link>
                        </div>
                        <div className='flex items-center gap-1 mt-4'>
                            <IoIosTabletPortrait />
                            <Link to='#'>আমাদের শিক্ষা প্রতিষ্ঠানে আপনাদের স্বাগতম</Link>
                        </div>
                    </marquee>
                </div>
            </div>


            <div className=' bg-sky-400 p-2 text-white text-xl mt-7'>
                <Link to='#'>ফেইজবুক পেজ</Link>
            </div>
            <div style={{ backgroundColor: "#ECECEC" }} className='mt-7'>
                <div className=' bg-sky-400 p-2 text-white text-xl'>
                    <h1>অফিসিয়াল লিংক</h1>
                </div>
                <div className='p-4 border border-gray-500 border-t-0 text-black'>
                    <div>
                        <div className='flex gap-1 items-center'>
                            <IoIosTabletPortrait />
                            <Link to='https://moedu.gov.bd/' target='blank'>শিক্ষা মন্ত্রণালয়</Link>
                        </div>
                        <div className='flex items-center gap-1 mt-1'>
                            <IoIosTabletPortrait />
                            <Link to='http://www.educationboardresults.gov.bd/' target='blank'>পাবলিক রেজাল্ট</Link>
                        </div>
                        <div className='flex items-center gap-1 mt-1'>
                            <IoIosTabletPortrait />
                            <Link to='https://dshe.gov.bd/'>মাধ্যমিক ও উচ্চশিক্ষা অধিদপ্তর</Link>
                        </div>
                        <div className='flex items-center gap-1 mt-1'>
                            <IoIosTabletPortrait />
                            <Link to='https://banbeis.gov.bd/' target='blank'>ব্যানবেইজ</Link>
                        </div>
                        <div className='flex items-center gap-1 mt-1'>
                            <IoIosTabletPortrait />
                            <Link to='http://www.nctb.gov.bd/' target='blank'>জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: "#ECECEC" }} className='mt-7'>
                <div className=' bg-sky-400 p-2 text-white text-xl'>
                    <h1>গুরুত্বপূর্ণ তথ্য</h1>
                </div>
                <div className='p-4 border border-gray-500 border-t-0 text-black'>
                    <div>
                        <div className='flex gap-1 items-center'>
                            <IoIosTabletPortrait />
                            <Link to='https://ebook.com.bd/' target='blank'>ই-বুক</Link>
                        </div>
                        <div className='flex items-center gap-1 mt-1'>
                            <IoIosTabletPortrait />
                            <Link to='https://teachers.gov.bd/' target='blank'>শিক্ষক বাতায়ন</Link>
                        </div>
                        <div className='flex items-center gap-1 mt-1'>
                            <IoIosTabletPortrait />
                            <p>মাল্টিমিডিয়া ক্লাসরুম ম্যানেজমেন্ট</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </div>
    );
};

export default HomeDetails;