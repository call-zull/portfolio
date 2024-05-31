import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import penginapan from "../../Assets/Projects/Penginapan.png";
import moonbeads from "../../Assets/Projects/Moonbeads.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={penginapan}
              isBlog={false}
              title="Guest House"
              description="Guest House Management created with Laravel 11 and Filament v.3 has features including : CRUD room types, CRUD rooms with prices, and CRUD invoices, then the generate invoice to pdf feature."
              ghLink="https://github.com/call-zull/Manajemen_Penginapan-Filament.git"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moonbeads}
              isBlog={false}
              title="Moonbeads"
              description="E-commerce Brand 'Moonbeads' which is based on selling bead accessories such as : bracelets, necklaces, key chains, rings. There are 3 roles, namely admin, seller, and buyer. Made with native PHP"
              ghLink="https://github.com/call-zull/moonbeads.git"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
