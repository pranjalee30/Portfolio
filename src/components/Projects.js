// src/components/Projects.js
import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Cake Creation",
      description:
        "A modern web app for browsing and ordering cakes with an intuitive and visually appealing interface. Features a responsive design, smooth animations, and an easy-to-navigate cake gallery.",
      link: "https://cake-cyan.vercel.app/",
      image: `${process.env.PUBLIC_URL}/images/cake-app.png`,
    },
    {
      title: "Drumkit",
      description:
        "A fun web app that simulates a drum kit with interactive sound effects. Users can play different drum sounds by clicking on buttons or pressing keyboard keys.",
      link: "https://pranjalee30.github.io/drumkit/",
      image: `${process.env.PUBLIC_URL}/images/drumkit.png`,
    },
    {
      title: "DevDetective",
      description:
        "DevDetective is a web application that allows users to search for any GitHub profile by username. It features a responsive design for optimal viewing across devices and offers theme change options for enhanced personalization and user experience.",
      link: "https://devdetective-by-pranjal.vercel.app/",
      image: `${process.env.PUBLIC_URL}/images/dev.png`,
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
