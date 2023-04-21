import React from 'react'

const Contact = () => {
  return (
    <div>
         <section id="contact">
    <div className="container">
      <h2>Contact</h2>
      <div className="row">
        <div className="col-md-6">
          <form>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Name"/>
            </div>
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Email"/>
            </div>
            <div className="form-group">
              <textarea className="form-control" rows="5" placeholder="Message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send</button>
          </form>
        </div>
        <div className="col-md-6">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Kadaghari, Manohara</p>
          <p>Kathmandu, 44600</p>
          <p>Phone: (977) 9823352529</p>
          <p>Email: samratkafle12@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Contact