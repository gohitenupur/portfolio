import React from 'react'
import'./contact.css'
import {FiMail} from 'react-icons/fi'
import {RiMessengerLine} from 'react-icons/ri'
import {IoLogoWhatsapp} from 'react-icons/io' 
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_koic4jm', 'template_mnvhzf3', form.current, 'qabBofSbNA-6bWRF6')
      
    e.target.reset();
      };



  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
            <article className='contact_option'>
              <FiMail className='contact_option_icon'/>
              <h4>Email</h4>
              <h5>nupurgohite01@gmail.com</h5>
              <a href="mailto:nupurgohite01@gmail.com" target="_blank">Send a message</a>
            </article>
            {/* <article className='contact_option'>
              <RiMessengerLine className='contact_option_icon'/>
              <h4>Messenger</h4>
              <h5>Nupur Gohite</h5>
              <a href="https://m.me/#" target="_blank">Send a message</a>
            </article> */}
            <article className='contact_option'>
              <IoLogoWhatsapp className='contact_option_icon'/>
              <h4>Whatsapp</h4>
              <h5>+91 9340557706</h5>
              <a href="https://whatsapp.com/send?phone+9340557706" target="_blank">Send a message</a>
            </article>
        </div>
        {/* End of contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name ' required />
          <input type="email" name="name" placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
