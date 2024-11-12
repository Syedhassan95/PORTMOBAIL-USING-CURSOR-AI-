import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { GrCertificate } from "react-icons/gr";


const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold" data-aos = "fade-right">Skills & Certification</h1>


      <div className="flex flex-wrap items-center justify-around mt-5" data-aos = "fade-left">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl box-shadow:; hover:scale-110  transition-all duration-300 ease-out hover:border-4 border-indigo-200 border-y-orange-500 hover:shadow-[0_-4px_8px_rgba(0,0,0,0.4),0_4px_8px_rgba(0,0,0,0.4)] hover:shadow-orange-500 w-20 h-20" >
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:scale-110 transition-all duration-300 ease-out hover:border-4 border-indigo-200 border-y-blue-500 hover:shadow-[0_-4px_8px_rgba(0,0,0,0.4),0_4px_8px_rgba(0,0,0,0.4)] hover:shadow-blue-500 w-20 h-20">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:scale-110 transition-all duration-300 ease-out hover:border-4 border-indigo-200 border-y-blue-500 hover:shadow-[0_-4px_8px_rgba(0,0,0,0.4),0_4px_8px_rgba(0,0,0,0.4)] hover:shadow-blue-500 w-20 h-20">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:scale-110 transition-all duration-300 ease-out hover:border-4 border-indigo-200 border-y-yellow-500 hover:shadow-[0_-4px_8px_rgba(0,0,0,0.4),0_4px_8px_rgba(0,0,0,0.4)] hover:shadow-yellow-500 w-20 h-20">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:scale-110  transition-all duration-300 ease-out hover:border-4 border-indigo-200 border-y-blue-500 hover:shadow-[0_-4px_8px_rgba(0,0,0,0.4),0_4px_8px_rgba(0,0,0,0.4)] hover:shadow-blue-500 w-20 h-20">
            <RiTailwindCssFill color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:scale-110 transition-all duration-300 ease-out hover:border-4 border-indigo-200 border-y-green-500 hover:shadow-[0_-4px_8px_rgba(0,0,0,0.4),0_4px_8px_rgba(0,0,0,0.4)] hover:shadow-green-500 w-20 h-20">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:scale-110  transition-all duration-300 ease-out hover:border-4 border-indigo-200 border-y-green-700 hover:shadow-[0_-4px_8px_rgba(0,0,0,0.4),0_4px_8px_rgba(0,0,0,0.4)] hover:shadow-green-700 w-20 h-20">
            <IoLogoNodejs color="#00ff00" size={50} />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:scale-110  transition-all duration-300 ease-out hover:border-4 border-indigo-200 border-y-gray-500 hover:shadow-[0_-4px_8px_rgba(0,0,0,0.4),0_4px_8px_rgba(0,0,0,0.4)] hover:shadow-gray-500 w-20 h-20">
            <SiExpress  color="#808080" size={50} /></span>
        </div> 

        
         <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center hover:scale-110 transition-all duration-500 ease-out hover:border-4 border-indigo-200 border-x-blue-500 hover:shadow-[0_-4px_8px_rgba(0,0,0,0.4),0_4px_8px_rgba(0,0,0,0.4)] hover:shadow-blue-500 h-32 w-96  ">
         <span className="text-white ml-2"><GrCertificate className="size-10"/></span>
         <h1 className="text-white text-xl ml-4 ">MERN STACK DEV</h1>         
         </div>

         
         <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center hover:scale-110 transition-all duration-500 ease-out hover:border-4 border-indigo-200 border-x-blue-500 hover:shadow-[0_-4px_8px_rgba(0,0,0,0.4),0_4px_8px_rgba(0,0,0,0.4)] hover:shadow-blue-500 h-32 w-96  ">
         <span className="text-white ml-2"><GrCertificate className="size-10"/></span>
         <h1 className="text-white text-xl ml-4 ">ENGLISH SPEAKING </h1>         
         </div>
  
        </div> 
        </div>

       
  
  );
};

export default Experience;
