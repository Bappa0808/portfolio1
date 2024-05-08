// components/Contact.js

import React from 'react';
import '../container/contact.css'
function Contact() {
return <div className=''>
  <div class="contact-form">
  <h2>Contact Me</h2>
  <form>
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" placeholder="Your Name" required/>
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="Your Email" required/>
    </div>
    <div class="form-group">
      <label for="phone">Phone Number:</label>
      <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" required/>
    </div>
    <div class="form-group">
      <label for="message">Message:</label>
      <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
    </div>
    <button type="submit">Send Message</button>
  </form>
</div>

  

 

</div>;
}
export default Contact;