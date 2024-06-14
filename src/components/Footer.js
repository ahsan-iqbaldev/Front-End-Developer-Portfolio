import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon4 from "../assets/img/upwork.svg";
import navIcon3 from "../assets/img/fiver.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/brain-ahsan/" target="blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/codesbyahsan" target="blank">
                  <img src={navIcon2} alt="Icon" />
                </a>
                <a href="https://www.upwork.com/freelancers/~01ef2d337eee7ec5a0" target="blanck">
                  <img src={navIcon4} alt="Upwork" />
                </a>
                <a href="https://www.fiverr.com/new_design20/build-website-in-react-js-next-js-vue-js-firebase-and-website-design" target="blanck">
                  <img src={navIcon3} alt="Fiver" />
                </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}