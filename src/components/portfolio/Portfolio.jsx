import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'


const data =[
  {
    id:1,
    image:IMG1,
    title:'This is a Tip Calculator App Using HTML CSS and JavaScript',
    github:'https://github.com/NupurGohite01/tip-calculator-app',
    demo:'https://nupur-tip-calc.netlify.app'
  },
  {
    id:2,
    image:IMG1,
    title:'This is a Tip Calculator App Using HTML CSS and JavaScript',
    github:'https://github.com/NupurGohite01/tip-calculator-app',
    demo:'https://nupur-tip-calc.netlify.app'
  },
  {
    id:3,
    image:IMG1,
    title:'This is a Tip Calculator App Using HTML CSS and JavaScript',
    github:'https://github.com/NupurGohite01/tip-calculator-app',
    demo:'https://nupur-tip-calc.netlify.app'
  },
  {
    id:4,
    image:IMG1,
    title:'This is a Tip Calculator App Using HTML CSS and JavaScript',
    github:'https://github.com/NupurGohite01/tip-calculator-app',
    demo:'https://nupur-tip-calc.netlify.app'
  },
  {
    id:5,
    image:IMG1,
    title:'This is a Tip Calculator App Using HTML CSS and JavaScript',
    github:'https://github.com/NupurGohite01/tip-calculator-app',
    demo:'https://nupur-tip-calc.netlify.app'
  },
  {
    id:6,
    image:IMG1,
    title:'This is a Tip Calculator App Using HTML CSS and JavaScript',
    github:'https://github.com/NupurGohite01/tip-calculator-app',
    demo:'https://nupur-tip-calc.netlify.app'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">

        {
          data.map(({id,image,title,github,demo})=>{
              return (
                <article key={id} className='portfolio_item'>
                <div className="portfolio_item_image">
                  <img src={image} alt={title} />
                </div>
                  <h3>{title}</h3>
                  <div className="portfolio_item_cta">
                  <a href={github} className='btn' target="_blank">Github</a>
                  <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
                  </div>
              </article>
                
              )
          
          })
        }

        {/* <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG1}/>
          </div>
            <h3>This is a Tip Calculator App Using HTML CSS and JavaScript </h3>
            <div className="portfolio_item_cta">
            <a href="https://github.com/NupurGohite01/tip-calculator-app" className='btn' target="_blank">Github</a>
            <a href="https://nupur-tip-calc.netlify.app" className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
        </article> */}
        

      </div>
    </section>
  )
}

export default Portfolio
