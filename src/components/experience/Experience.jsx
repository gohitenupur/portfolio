import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id="experience">
      <h5>Skill I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experince_details'>
              <BsPatchCheckFill className='experience_details_icon' />
              <div>
              <h4>HTML</h4>
              <small className='text_light'>Experienced</small>
              </div>
            </article>
            <article className='experince_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text_light'>Intermediate</small>
              </div>
            </article>
            <article className='experince_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text_light'>Intermediate</small>
              </div>
            </article>
            <article className='experince_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
              <h4>React</h4>
              <small className='text_light'>Intermediate</small>
              </div>
            </article>
            <article className='experince_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text_light'>Experienced</small>
              </div>
            </article>
          </div>
          
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className='experince_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
              <h4>JAVA</h4>
              <small className='text_light'>Experienced</small>
              </div>
            </article>
            <article className='experince_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
              <h4>Node JS</h4>
              <small className='text_light'>Intermediate</small>
              </div>
            </article>
            <article className='experince_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className='text_light'>Intermediate</small>
              </div>
            </article>
            <article className='experince_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
              <h4>MYSQL</h4>
              <small className='text_light'>Basic</small>
              </div>
            </article>
            <article className='experince_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text_light'>Intermediate</small>
              </div>
            </article>
          </div>
          
        </div>
        
      </div>





    </section>
  )
}

export default experience
