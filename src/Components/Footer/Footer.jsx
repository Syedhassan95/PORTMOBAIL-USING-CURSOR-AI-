import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold" data-aos = "fade-right">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal"data-aos = "fade-right">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl" data-aos = "fade-left">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          <a href="https://mail.google.com/mail/u/0/?pli=1#sent?compose=new" target="blank">sh764998@gmail.com</a>
          
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          <a href="https://www.linkedin.com/in/syed-hassan-9465312b2/" target="blank">Linkedin</a>
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
          <a href="https://github.com/Syedhassan95" target="blank">GitHub </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
