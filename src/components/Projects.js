import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import { projects } from "../ProjectsData";

const Projects = () => {
  return (
    <section className="portfolio" id="portfolio">
      <Container>
        <h2>Portfolio</h2>
        <Row>
          {projects.map((project, i) => (
            <Col xs={12} md={6} xl={4} className="mb-portfolio">
              <ProjectCard key={i} {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
