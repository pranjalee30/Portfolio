// src/components/Projects.js
import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Cake Creation",
      description:
        "A modern web app for browsing and ordering cakes with an intuitive and visually appealing interface. Features a responsive design, smooth animations, and an easy-to-navigate cake gallery.",
      link: "https://pranjalee30.github.io/cake/",
      image: `${process.env.PUBLIC_URL}/images/cake.png`,
    },
    {
      title: "Drumkit",
      description:
        "A fun web app that simulates a drum kit with interactive sound effects. Users can play different drum sounds by clicking on buttons or pressing keyboard keys.",
      link: "https://pranjalee30.github.io/drumkit/",
      image: `${process.env.PUBLIC_URL}/images/drumkit.png`,
    },
    {
      title: "Fyle",
      description:
        "A modern expense management web application with features for tracking, categorizing, and analyzing expenses. Includes a user-friendly interface for managing personal finances efficiently.",
      link: "https://pranjalee30.github.io/Fyle-Pranjal/",
      image: `${process.env.PUBLIC_URL}/images/Fyle.png`,
    },
  ];

  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
