import React from 'react'

const Services = () => {
  return (
    <div>
         <section id="services">
    <div className="container">
      <h2>Services</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="service">
            <i className="fa fa-desktop"></i>
            <h3>Web Development</h3>
            <p>We can develop responsive websites using HTML, CSS, and JavaScript that are optimized for speed and usability.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service">
            <i className="fa fa-pencil"></i>
            <h3>Graphic Design</h3>
            <p>We create visually stunning designs for logos, branding, social media, and print.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service">
            <i className="fa fa-line-chart"></i>
            <h3>Digital Marketing</h3>
            <p>We help you to reach your target audience through search engine optimization, social media marketing, and email marketing.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Services