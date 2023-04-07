import React from 'react'
import './footer.css'
import {CiFacebook} from 'react-icons/ci'
import {CiInstagram} from 'react-icons/ci'
import {CiTwitter} from 'react-icons/ci'
import {BsCodeSlash} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'><BsCodeSlash/></a>

      <ul className='footer_links'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact Us</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com"><CiFacebook/></a>
        <a href="https://instagram.com"><CiInstagram/></a>
        <a href="https://twitter.com"><CiTwitter/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Nupur Gohite </small>
      </div>
    </footer>
  )
}

export default Footer
