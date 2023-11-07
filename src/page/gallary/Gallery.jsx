import image from '../../assets/download (1).jpeg'
import image1 from '../../assets/download (2).jpeg'
import image2 from '../../assets/images (6).jpeg'
import image3 from '../../assets/download (3).jpeg'
import image4 from '../../assets/_99230151_gettyimages-138337463.jpg'
import image5 from '../../assets/4.jpg'
import image6 from '../../assets/8.jpg'
import image7 from '../../assets/79734-liberty-amar.jpg'
import image8 from '../../assets/1628503109.Muk.jpg'
import image9 from '../../assets/download (4).jpeg'
import image10 from '../../assets/images (5).jpeg'
import image11 from '../../assets/liberation-war-20201115183225.jpg'
import image12 from '../../assets/প্রামাণ্য-চলচ্চিত্র-স্টপ-জেনোসাইড-এর-একটি-দৃশ্য।.jpg'

const Gallery = () => {
    return (
        <div>
            <h1 className=' text-black text-center text-xl mb-5 bg-slate-300 p-3'>বঙ্গবন্ধুর ৭ই মার্চের ভাষণ</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full md:w-10/12 justify-items-center m-auto'>
                <img className='rounded w-full h-72' src={image} alt="" />
                <img className='rounded w-full h-72' src={image1} alt="" />
                <img className='rounded w-full h-72' src={image2} alt="" />
            </div>
            <h1 className=' text-black bg-slate-300 p-3 text-center text-xl my-8'>সাত জন বীরশ্রেষ্ঠ</h1>

            <div>
                <img className='m-auto lg:w-1/2 w-full' src={image3} alt="" />
            </div>
            <h1 className=' text-black text-center text-xl my-5 bg-slate-300 p-3'>ভিডিও চিত্র</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
                <iframe className='w-full h-72' src="https://www.youtube.com/embed/188hvm_fW7E" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe className='w-full h-72' src="https://www.youtube.com/embed/CUD9sNkt2RI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe className='w-full h-72' src="https://www.youtube.com/embed/6IdCJTs4VwE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe className='w-full h-72' src="https://www.youtube.com/embed/PFCrooJ4CaA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe className='w-full h-72' src="https://www.youtube.com/embed/8k-zVwskPHw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <h1 className=' text-black bg-slate-300 p-3 text-center text-xl my-8'>মুক্তিযুদ্ধের স্থিরচিত্র
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
             <img className='w-full h-72' src={image4} alt="" />
             <img className='w-full h-72' src={image5} alt="" />
             <img className='w-full h-72' src={image6} alt="" />
             <img className='w-full h-72' src={image7} alt="" />
             <img className='w-full h-72' src={image8} alt="" />
             <img className='w-full h-72' src={image9} alt="" />
             <img className='w-full h-72' src={image10} alt="" />
             <img className='w-full h-72' src={image11} alt="" />
             <img className='w-full h-72' src={image12} alt="" />
            </div>
        </div>
    );
};

export default Gallery;