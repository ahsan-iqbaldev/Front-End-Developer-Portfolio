import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/social-media.jpg";
import disnep from "../assets/img/disnep.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import eCommercejs from "../assets/img/screencapture-hocsell-000webhostapp-2024-04-10-22_21_05.png"
import boomtalk from "../assets/img/screencapture-boomtalk-netlify-app-2024-04-23-18_01_47.png"
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Social Media App",
      imgUrl: projImg1,
      github: "https://github.com/codesbyahsan/social-media-app",
      type: "react",
      url: "https://social-media-app-66f89.web.app/"
    },
    {
      title: "Live Streaming Website",
      imgUrl: disnep,
      github: "https://github.com/codesbyahsan/brian-view",
      type: "react",
      url: "https://brian-trailer.web.app/"
    },
    {
      title: "Ecommerce Shopping Website",
      imgUrl: eCommercejs,
      github: "https://github.com/codesbyahsan/hocsell",
      type: "javascript",
      url: "https://hocsell.000webhostapp.com/" 
    },
    {
      title: "Video Calling App",
      imgUrl: boomtalk,
      github: "https://github.com/codesbyahsan/Boom",
      type: "next",
      url: "https://boomtalk.netlify.app/" 
    },
    // {
    //   title: "Business Startup",
    //   imgUrl: projImg3,
    //   type: "next",
    //   url: "https://social-media-app-66f89.web.app/"
    // },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                  we're thrilled to present a curated selection of our latest creations. From innovative fully functionall and mobile friendly Websites each project represents our dedication to creativity, quality, and client satisfaction.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">React JS/TS</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Next JS/TS</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Javascript</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects
                            .filter((project) => project.type === "react")
                            .map((project, index) => {
                              return <ProjectCard key={index} {...project} />;
                            })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row>
                          {projects
                            .filter((project) => project.type === "next")
                            .map((project, index) => {
                              return <ProjectCard key={index} {...project} />;
                            })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <Row>
                          {projects
                            .filter((project) => project.type === "javascript")
                            .map((project, index) => {
                              return <ProjectCard key={index} {...project} />;
                            })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
