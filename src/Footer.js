import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h4>About Me</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod purus ac nulla tincidunt, vel sollicitudin nisi tincidunt.</p>
        </div>
        <div className="col-md-3">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <h4>Contact Me</h4>
          <p>Kadaghari, Manohara</p>
          <p>Kathmandu, 44600</p>
          <p>Phone: (977) 9823352529</p>
          <p>Email: samratkafle12@gmail.com</p>
        </div>
      </div>
      <hr/>
      <p className="text-center">Copyright © 2023</p>
    </div>
  </footer>
    </div>
  )
}

export default Footer