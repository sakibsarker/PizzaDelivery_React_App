import React from 'react'
import Cform from './CForm.css'
function CForm() {
  return (
    <div className='CForm'>
      <section className='contact'>
        <div className="cont container">
          <div className="contact-text">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <h6>Address</h6>
            <p className='address'>Lorem, ipsum dolor sit amet consectetur </p>
            <h6>Email</h6>
            <p className='mail'>contactus@gmail.com</p>
          </div>
          <div className="contact-form">
            <form action="">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" cols="30" rows="5"></textarea>
              <input type="submit" value="submit" />
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CForm
