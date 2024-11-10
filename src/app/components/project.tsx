import Image from "next/image";
import React from "react";
import "./project.css"; // Import custom CSS

const Project = () => {
  const projectList = [
    {
      title: "Project One",
      description: "Portfolio Website",
      link: "https://github.com/Faryal88/Portfolio-Tailwind-CSS.git",
      image: "/pro1.jpg", 
    },
    {
      title: "Project Two",
      description: "E-Commerce Website",
      link: "https://github.com/Faryal88/E-Commerce-Website.git",
      image: "/pro2.jpg", 
    },
    {
      title: "Project Three",
      description: "Landing page",
      link: "https://github.com/Faryal88/CodeCrafters-Hub-Task-3-Landing-Page.git",
      image: "/pro3.jpg", 
    },
  ];

  return (
    <section className="project-section">
      <div className="project-container">
        <h2 className="project-title">MY PROJECTS</h2>
        <div className="project-grid">
          {projectList.map((project, index) => (
            <div key={index} className="project-card">
              <Image
                src={project.image}
                alt={`${project.title} image`}
                width={800}
                height={500}
                className="project-image"
                unoptimized={true}
              />
              <h3 className="project-title-card">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="project-button">View Project</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
