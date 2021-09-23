import React from "react";
import "./Contact.css";
// import emailjs from "emailjs-com";
function Contact() {
  return (
    <section className="Contact" id="/Contact">
    <div>
      <h1>Contact</h1>
      <div className="contact">
        <h5>
          <i className="far fa-envelope fa-2x" />
          &emsp;&emsp;afreedicp@gmail.com
        </h5>
        <h5>
          <i className="fas fa-phone fa-2x" />
          &emsp;&emsp;(+91)9995588003
        </h5>
        <h5>
          <i class="fas fa-map-marker-alt"></i>
          &emsp;&emsp;Kannur,Kerala,India pin:670142
        </h5>
      </div>
    </div>
    </section>
  );
}

export default Contact;
