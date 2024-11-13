import React from "react";
import bannerImg from "../../assets/project.webp";

const ProjectCard = ({ title, main}) => {
  return (
    <div className="p-4 sm:p-6 md:p-10 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl border-4 border-indigo-200 border-x-indigo-500 hover:scale-110 hover:transition-all ease-out hover:border-4 hover:shadow-[4px_0_8px_rgba(0,0,0,0.3),-4px_0_8px_rgba(0,0,0,0.3)] hover:shadow-blue-500" data-aos = "fade-left">
      <img className="p-4" src={bannerImg} alt="" />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4 ">
        <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          <a href="https://github.com/Syedhassan95" target="blank">Source Code</a>
        </button>
   </div>
   </div>
  );
};

export default ProjectCard;
