import React from 'react'

const Portfolio = () => {
  return (
    <div>
         <section id="portfolio">
    <div className="container">
      <h2>Portfolio</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="portfolio-item">
            <img src="image1.jpg" alt="Portfolio Item"/>
            <div className="overlay">
              <h3>Project Title</h3>
              <p>Description of the project goes here.</p>
              <a href="#">View Details</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="portfolio-item">
            <img src="image2.jpg" alt="Portfolio Item"/>
            <div className="overlay">
              <h3>Project Title</h3>
              <p>Description of the project goes here.</p>
              <a href="#">View Details</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="portfolio-item">
            <img src="image3.jpg" alt="Portfolio Item"/>
            <div className="overlay">
              <h3>Project Title</h3>
              <p>Description of the project goes here.</p>
              <a href="#">View Details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Portfolio