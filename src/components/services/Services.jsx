import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className='service_list_icon'/>
              <p>HTML</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>CSS & SASS</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Bootstrap</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Tailwind CSS</p>
            </li>
          </ul>
        </article>
        {/* end of UI/UX */}
        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className='service_list_icon'/>
              <p>HTML</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>CSS</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>JavaScript</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>React.js</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>MongoDB</p>
            </li>
          </ul>
        </article>
        {/* end of Web development */}
        <article className='service'>
          <div className="service_head">
            <h3>Data Structures And Algorithms</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Good Problem Solving Skills</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Solved 300+ Leetcode Problems</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Part Of Newton Super 50 Batch in Newton School</p>
            </li>
            
          </ul>
        </article>
        {/* end of DSA */}
      </div>
    </section>
  )
}

export default Services
