import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './style.css'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
 
    emailjs.sendForm('service_kw347c3', 'template_9glxe9n', form.current, '5B9zDooiAuU5Dydjj')
      .then((result) => {
          // show the user a success message
          alert('Message Sent')
          document.getElementById('name').value = '';
          document.getElementById('email').value = '';
          document.getElementById('message').value = '';

      }, (error) => {
          // show the user an error
          alert('Error: Message not sent')
      });
  };
 
  return (
    <div id="contact-section" className='contact-container'>
      <div className="section-title">
        <h1>Contact</h1>
        <h2>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</h2>
      </div>
      <div className='contact-form-container'>
        <form ref={form} onSubmit={sendEmail}>
          <div className="contact-form-field">
            <label className='contact-form-label' htmlFor="name" >Name</label>
            <input required placeholder="Enter Your Name" name='name' id='name' type='text' className='contact-form-input'></input>
          </div>
          <div className="contact-form-field">
            <label className='contact-form-label' htmlFor="email">Email</label>
            <input required placeholder="Enter Your Email" name='email' id='email' type='text' className='contact-form-input'></input>
          </div>
          <div className="contact-form-field">
            <label className='contact-form-label' htmlFor="message">Message</label>
            <textarea required placeholder="Enter Your Message" name='message' id='message' className='contact-form-input'></textarea>
          </div>
          <button className='theme-button' type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact