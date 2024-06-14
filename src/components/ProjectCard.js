import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectCard = ({ title, description, imgUrl, url, github }) => {
  return (
    <Col size={12} sm={6} md={4}>
      {/* <a href={url} target="Blank"> */}
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx" style={{ color: "white" }}>
          <h4>{title}</h4>
          <div className="d-flex gap-3 justify-content-center">
            <a href={github} target="Blank">
              <button className="projectCardButton">Github</button>
            </a>
            <a href={url} target="Blank">
              <button className="projectCardButton">Preview</button>
            </a>
          </div>
          {/* <span>{description}</span> */}
        </div>
      </div>
      {/* </a> */}
    </Col>
  );
};
