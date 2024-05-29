import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammad Zulkifli </span>
            from <span className="purple"> Banjarmasin, Indonesia.</span>
            <br />
            I am Currently I Work as a Freelancer Web Developer.
            <br />
            I am Currently Studying Informatic Management, Majoring in Business
            Administration, at The Banjarmasin State Polytechnic
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Work Out | Martial Arts
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Manhwa | Manga
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "When you improve your skills, you indirectly enhance the quality of
            yourself."🧑‍💻
          </p>
          <footer className="blockquote-footer">Call_Zull ~</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
