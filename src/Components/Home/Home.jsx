import React from "react";
import homeImg from "../../assets/home.jpg";
import TextChange from "../TextChange";
import Resume from "../../assets/New-Resume.pdf"

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 " data-aos = "fade-right">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter bottom-4 mt-6">
          <h1 className="">Hi iam Hassan <br /> <span className="text-[#465697] ">MERN STACK DEV</span></h1>
          {/* <TextChange /> */}
        </h1>
        <p className="text-sm md:text-2xl tracking-tight  ">
        A MERN stack developer is a web developer who uses the MERN stack to create web applications
        </p>
        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-full bg-[#465697] ">
         <a href={Resume} target="blank"> MY RESUME</a>
        </button>
      </div>
      <div>
      <img className="rounded-full w-96 h-96 border-4 border-indigo-200 border-y-indigo-500 hover:scale-150 t transition-transform transition-gpu hover:border-4  border-x-blue-500 hover:shadow-[4px_0_8px_rgba(0,0,0,0.3),-4px_0_8px_rgba(0,0,0,0.3)] hover:shadow-blue-500" src={homeImg} alt=""  data-aos = "fade-left"/>
      </div>
    </div>
  );
};

export default Home;
