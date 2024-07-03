// src/components/Skills.js
import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills">
      <h1>
        <span>M</span>e and <br />
        My Tech Stack
      </h1>
      <ul>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/icons8-c-64.png`}
            alt="C++"
          />
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/icons8-html-48.png`}
            alt="HTML"
          />
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/icons8-css-64.png`}
            alt="CSS"
          />
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/icons8-javascript-64.png`}
            alt="JavaScript"
          />
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/icons8-reactjs-68.png`}
            alt="ReactJS"
          />
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/icons8-git-64.png`}
            alt="Git"
          />
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/icons8-python-94.png`}
            alt="Python"
          />
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/icons8-github-64.png`}
            alt="Github"
          />
        </li>
      </ul>
      <p>
        As a Tech Enthusiast, I'm currently exploring in Software Development,
        Full Stack Development & pursuing B.tech from National Institute of
        Technology Agartala and love exploring new technologies.
      </p>
    </section>
  );
}

export default Skills;
