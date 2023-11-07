import { useEffect, useState } from 'react';
import image1 from '../../assets/ALL-DS-56.jpg';
import image2 from '../../assets/Children running into school.jpg';
import image3 from '../../assets/FutureTN.jpg';
const Carusale = () => {
    const images = [
        image1,
        image2,
        image3,
        image2,
        // Add more image URLs as needed
      ];
    
      const [currentSlide, setCurrentSlide] = useState(0);
    
      // Function to update the current slide
      const changeSlide = (newSlide) => {
        setCurrentSlide(newSlide);
      };
    
      useEffect(() => {
        // Automatic slide change every 3 seconds
        const timer = setInterval(() => {
          changeSlide((currentSlide + 1) % images.length);
        }, 5000);
    
        // Clean up the interval on unmount
        return () => clearInterval(timer);
      }, [currentSlide, images.length]);
    return (
        <div>
         <div className="carousel w-full">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-item relative w-full h-64 ${
            index === currentSlide ? '' : 'hidden'
          }`}
        >
          <img src={image} className="w-full" alt="" />
        </div>
      ))}
    </div>
    <div className='flex w-full'>
      <div className=' bg-green-500 text-white p-3 w-32 flex justify-center'><p>ঘোষণা 
</p></div>
<div className='flex w-full justify-center items-center text-xl text-green-400 ' style={{ backgroundColor : "#EDEDED"}}>
<marquee>সুনামগঞ্জ জেলাধীন জগন্নাথপুরস্থ এক প্রাচীন জনপদের নাম ইসহাকপুর । এ গ্রামের সম্ভ্রান্ত ধর্মভীরু মুসলিম পরিবার সমূহের মধ্যে শীর্ষস্থানে অবস্থান খান পরিবারের </marquee>
</div>
    </div>
    
      </div>
    );
};

export default Carusale;