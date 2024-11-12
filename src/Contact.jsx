import React from 'react'

import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaDribbble,
} from 'react-icons/fa'

import { FiSend } from 'react-icons/fi'

import './contact.css'
const Contact = () => {
  return (
    <section className="contact section mb-10 ml-24">
       {/* <h2 className="section__title" data-aos="fade-down">
         Get In<span> Touch</span>
       </h2> */}

       <div className="contact__container container grid">
        <div className="contact__data pl-7 text-white" data-aos="fade-right">
          <h3 className="contact__title">Let's talk to me</h3>

          <p className="contact__description">
            Contact me if you have any questions or suggestions
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon'/>

              <div>
                <span className="info__title">Email</span>
                <h4 className="info__desc mr-2">sh764998@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon'/>

              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">9588634228</h4>
              </div>
              </div>
              <button className='button text-white bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 w-44 rounded-full'>Send Message
            <span className="button__icon contact__button-icon text-white ">
            </span>
          </button>
          </div>
{/* 
          <div className="contact__socials">
            <a href="https://facebook.com"className='contact__socials-link'>
              <FaFacebookF />
            </a>

            <a href="https://twitter.com"className='contact__socials-link'>
              <FaTwitter />
            </a>

            <a href="https://youtube.com"className='contact__socials-link'>
              <FaYoutube />
            </a>

            <a href="https://dribbble.com"className='contact__socials-link'>
              <FaDribbble />
            </a>
          </div> */}

        </div>

        {/* <form className="contact form" data-aos="fade-left">

          <div className="form__input-group border-white">
            <div className="form__input-div text-white">
              <input type="text" placeholder='Name' className="form__control" />
            </div>

            <div className="form__input-div text-white">
              <input type="email" placeholder='Email' className="form__control" />
            </div>

            <div className="form__input-div text-white">
              <input type="text" placeholder='Subject' className="form__control" />
            </div>
          </div>

          <div className="form__input-div  text-white">
            <textarea placeholder='Your Message'  className="form__control textarea"></textarea>
          </div>
         {
          <button className='button text-white bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 w-44 rounded-full'>Send Message
            <span className="button__icon contact__button-icon text-white ">
            </span>
          </button> }
        </form> */}
        
{/* 
        <button className='bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ... w-44 ' > send message</button> */}
       </div>
    </section>
  )
}

export default Contact