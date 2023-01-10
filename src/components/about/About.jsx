import React from 'react'
import './about.css'
import ME from '../../assets/nup2.JPG'
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
          <p>I am Nupur Gohite, a Full Stack Web Developer. My passion lies in solving complex problems and creating stunning websites. I have been obsessed with the idea of using software to solve practical problems. Software development is a never-ending puzzle that I am passionately engaged in solving. I believe in the power of programming to transform and improve the lives of people around the world. I really enjoy learning new things and connecting with people across a range of industries, so don't hesitate to reach out if you'd like to get in touch.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

        
      </div>

    </section>
  )
}

export default About