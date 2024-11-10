"use client";
import Image from "next/image";
import React from "react";
import "./contact.css"; // Import custom CSS

const Contact = () => {
  return (
    <div className="contact-container">
      <section id="contact">
        <div className="contact-heading-container">
          <div className="contact-heading">CONTACT ME</div>
        </div>

        <div className="contact-grid">
          <div className="form-group">
            <div>
              <label htmlFor="name" className="label">
                Enter Your Name:
              </label>
              <input
                id="name"
                type="text"
                className="input"
              />
            </div>

            <div>
              <label htmlFor="email" className="label">
                Enter Your Email:
              </label>
              <input
                id="email"
                type="email"
                className="input"
              />
            </div>

            <div>
              <label htmlFor="message" className="label">
                Write Message:
              </label>
              <textarea
                id="message"
                rows={5}
                className="textarea"
              />
            </div>
            
            <button className="submit-button">
              Submit
            </button>
          </div>

          <div className="contact-image-container">
            <Image 
              src="/me1.jpg" 
              alt="me"
              height={300}
              width={400}
              className="contact-image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

