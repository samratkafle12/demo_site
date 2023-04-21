import React from 'react'

const About = () => {
  return (
    <div>
         <section id="about">
    <div className="container">
      <h2>About Me</h2>
      <div className="row">
        <div className="col-md-6">
          <img src = {require ('./image/sam.jpg')} alt="Profile Picture"/>
        </div>
        <div className="col-md-6">
          <p>Intend to build a career with leading corporate of hi-tech environment with committed &  
dedicated people, which will help me to explore myself fully and realize my potential.  
Willing to work as a key player in challenging and creative environment.</p>
<p>Apart from coding, I like spending time outdoors, reading non-fiction books, staying active through yoga and trying new recipes in the kitchen. Having diverse interests keeps me inspired and happy.</p>
          <a target='_blank' href="https://drive.google.com/file/d/1FGLJw3RUCDhZtyo-ppSUkAJGnqoa3wZF/view?usp=sharing" className="btn">Download Resume</a>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default About