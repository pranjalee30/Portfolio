// src/components/Contact.js
import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact">
      <h1>Get In Touch</h1>
      <p>
        I'm always open to new opportunities and conversations. Whether you're
        interested in a potential collaboration, have questions about my work,
        or just want to connect, don't hesitate to reach out. I look forward to
        your message!
      </p>
      <form
        action="mailto:pranjalkee010@gmail.com"
        method="POST"
        encType="text/plain"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit" class="btn">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
