import React from 'react'
import contactLeft from "../assets/contactLeft.jpg"
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
    <div
        className="contactLeft"
        stlye={{ backgroundImage: `url(${contactLeft})` }}
    ></div>
    <div className="contactRight">
        <h1> Contact Us </h1>

    <form id="contact-form" method="POST">
        <label htmlFor="name">Full Name</label>
        <input name="text" placeholder="Input Full Name" type="text" />
        <label htmlFor="email">Full Name</label>
        <input name="email" placeholder="Input your email" type="email" />
        <label htmlFor="messsage">Message</label>
        <textarea 
            rows="5" 
            placeholder="Let us know how we fucked up" 
            name="message" 
            required
        >  
        </textarea> 
        <button type="submit"> Enviar Message </button>
        </form> 
        </div> 
        </div> 
        ); 
    }


export default Contact;

