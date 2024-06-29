import React, { useEffect, useRef } from "react";
import "./About.css";

function About() {
  const aniRef = useRef(null);

  useEffect(() => {
    const texts = ["Engineer", "Developer", "Roboticist"];
    let currentIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const type = () => {
      if (deleting) {
        aniRef.current.textContent = texts[currentIndex].substring(
          0,
          charIndex - 1
        );
        charIndex--;

        if (charIndex === 0) {
          deleting = false;
          currentIndex = (currentIndex + 1) % texts.length;
          setTimeout(type, 500); // Add a short pause before starting the next word
        } else {
          setTimeout(type, 50); // Speed up the delete effect
        }
      } else {
        aniRef.current.textContent = texts[currentIndex].substring(
          0,
          charIndex + 1
        );
        charIndex++;

        if (charIndex === texts[currentIndex].length) {
          deleting = true;
          setTimeout(type, 1000); // Add a pause when the word is fully typed
        } else {
          setTimeout(type, 100); // Speed up the typing effect
        }
      }
    };

    type();

    return () => clearTimeout(type); // Clear the timeout if the component unmounts
  }, []);

  return (
    <div id="about">
      <div className="text">
        <p>Hello, I am</p>
        <h1>Pranjal Kumar</h1>
        <p>
          And I am
          <span id="ani" ref={aniRef}></span>
        </p>
        <button className="c-btn">Hire Me</button>
      </div>
    </div>
  );
}

export default About;
