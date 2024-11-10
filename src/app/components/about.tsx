"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./about.css"; // Import the custom CSS file

const About = () => {
  return (
    <div>
      <section id="about">
        <div className="about-heading">
          <TypeAnimation
            sequence={["About", 500, "Me..", 500]}
            style={{ fontSize: "1.5em" }}
            speed={40}
            repeat={Infinity}
          />
        </div>

        <div className="about-container">
          <TypeAnimation
            sequence={[
              "I’m a passionate Front-End Web Developer with expertise in crafting visually appealing, responsive, and user-friendly websites. I specialize in HTML, CSS, JavaScript, and modern frameworks like Next.js and React, with a deep focus on Tailwind CSS for rapid, customizable UI design. My goal is to turn creative ideas into functional, high-performing websites that deliver seamless user experiences across devices. With a strong eye for design and attention to detail, I prioritize clean, maintainable code and optimized performance. Whether building dynamic single-page applications or robust websites, I aim to bridge the gap between design and development. Let’s create something amazing together!",
              3000,
              "", 
            ]}
            speed={30}
            omitDeletionAnimation={true}
            style={{
              fontSize: "1.2em",
              display: "block",
              minHeight: "200px",
              color: "#fff",
            }}
            repeat={Infinity}
          />
        </div>
      </section>
    </div>
  );
};

export default About;
