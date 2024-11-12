import React, { useEffect } from "react";
import AboutImg from "../../assets/about.webp";
import { IoArrowForward } from "react-icons/io5";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { GrCertificate } from "react-icons/gr";

const About = () => {
  useEffect (() => {
    Aos.init( {duration: 2000,
               
    });
  }, [])
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 "
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold mb-3 ml-20">About <span className="text-[#465697]">Me</span></h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80 mr-44 rounded-full hover:scale-150 transition-all duration-500 ease-out hover:border-4 border-indigo-200 border-x-blue-500 hover:shadow-[4px_0_8px_rgba(0,0,0,0.3),-4px_0_8px_rgba(0,0,0,0.3)] hover:shadow-blue-500" src={AboutImg} alt="About img"  data-aos = "fade-left"/>

          <ul>
            <div className="flex gap-3 py-4" data-aos="fade-left">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight mt-1">
                A React front end developer builds and maintains user interfaces and front-facing components using - no surprises here -React/React. js, which is a front end library and framework
                </p>
                
              </span>
            </div>
            
            <div className="flex gap-3 py-4" data-aos="fade-left">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  MERN Full Stack Dev
                </h1>
                <p className="text-sm md:text-md leading-tight">
                A Full-Stack developer is a professional responsible for working on both front-end and back-end development processes. They design, develop, and maintain fully-fledged and functioning platforms with databases or servers. These servers do not need other third-party applications to build an entire system from scratch
                </p>
              </span>
            </div> 
            
            <div className="flex gap-3 py-4" data-aos="fade-left">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                A well-crafted Node JS Backend Developer resume demonstrates your ability to build scalable, efficient server-side applications. Highlight your expertise in JavaScript, Express. js, and database management systems like MongoDB 
                </p> 
              </span> 
            </div>
          </ul>
        </div>
        <h1 className="flex justify-start mt-10 text-3xl mb-5" data-aos = "fade-right"> EDUCATION
        </h1>

        
        <span className="bg-blue-500 rounded-full pl-1 pr-1 pb-1 text-sm " data-aos = "fade-left">2024-present</span><br />
        <h1 className="mt-3 mb-3" data-aos = "fade-left">Post Graduation Degree (MCA) From -Sant Gadge Baba University <br /> Master of Computer Applications. It is a two-year postgraduate program that focuses on Mastering in computer applications. It is designed for students aspiring to build a career in computer applications and software development.
</h1>


        <span className="bg-blue-500 rounded-full pl-1 pr-1 pb-1 text-sm" data-aos = "fade-left"> Compleeted in -2024</span><br />
        <h1 className="mt-3" data-aos = "fade-left">Graduation Degree (BCA) From -Sant Gadge Baba University <br />A Bachelor of Computer Applications BCA is a three-year undergraduate degree that prepares students for careers in the information technology (IT) field
</h1>


          </div>
      </div>
  );
};

export default About;
