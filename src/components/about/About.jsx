import React from 'react'
import './about.css'
import ME from '../../assets/move.b0d50c6993364ae6c575.gif'
import {FaAward} from 'react-icons/fa'
import {AiOutlineSolution} from 'react-icons/ai'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className='about_card'>
              <AiOutlineSolution className='about_icon'/>
              <h5>Leetcode</h5>
              <small>300+ Questions solved</small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <p>I am Nupur Gohite, a Full Stack Web Developer. I have previously worked as a FCSA and PGT CS in Jawahar Navodaya Vidyalaya. I am passionate about developing scalable web applications and have experience working across the full stack. I am currently looking to join a tech organization where I can continue to grow my skill set while contributing to the organization.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

        
      </div>

    </section>
  )
}

export default About