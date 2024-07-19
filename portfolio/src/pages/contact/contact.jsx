import React, { useState } from 'react'
import {FaEnvelopeOpen,FaPhoneSquareAlt, FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa'
import {FiSend} from 'react-icons/fi';
import "./contact.css"
const Contact = () => {
    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "e65ec258-4912-40c8-98e0-97e5866a910f");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Email Sent Successfully");
          event.target.reset();
          alert(result);
        } else {
          console.log("Error", data);
          setResult(data.message);
          alert(result);
        }
      };
  return (
    <div>
      <section className='contact section'>
        <h2 className="section__title">
            Get In <span>Touch</span>
        </h2>
        <div className="contact__container container grid" >
            <div className="contact__data">
                <h3 className="contact__title">Let's talk !</h3>
                <p className='contact__description'>
                    Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>

                <div className="contact__info">
                    <div className="info__item">
                        <FaEnvelopeOpen className='info__icon' />
                        <div>
                            <span className='info__title'>
                                Mail me
                            </span>
                            <h4 className='info__desc'>adityakeshri9234@gmail.com</h4>
                        </div>
                    </div>
                    <div className="info__item">
                        <FaPhoneSquareAlt className='info__icon' />
                        <div>
                            <span className='info__title'>
                                Call me
                            </span>
                            <h4 className='info__desc'>+91 9031474184</h4>
                        </div>
                    </div>

                </div>
                <div className="contact__socials">
                    <a href="https://www.linkedin.com/in/aditya-keshri-61b7b924a/" className="contact__socials-link">
                    <FaLinkedin/>
                    </a>
                    <a href="https://github.com/adityakeshri9234" className="contact__socials-link">
                    <FaGithub/>
                    </a>
                    <a href="https://www.instagram.com/aditya_keshri45/" className="contact__socials-link">
                    <FaInstagram/>
                    </a>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact__form'>
                <div className="form__input-group">
                    <div className="form__input-div">
                        <input type="text" placeholder='Your Name' className='form__control' name='name'/>

                    </div>
                    <div className="form__input-div">
                        <input type="email" placeholder='Your Email' className='form__control' name='email'/>
                        
                    </div>
                    {/* <div className="form__input-div">
                        <input type="text" placeholder='Your Subject' className='form__control' name='subject'/>
                        
                    </div> */}
                </div>
                <div className="form__input-div">
                        <textarea placeholder='Your Message' className='form__control textarea' name='message'/>
                        
                </div>
                <button className='button'>
                    Send Message
                    <span className="button__icon contact__button-icon">
                        <FiSend/>
                    </span>
                </button>
            </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
