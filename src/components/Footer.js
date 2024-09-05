import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h1 class="logo-txt-lg">Asif <span class="logo-txt-sm">Hussain</span></h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a target="_blank" rel="noreferrer" href="https://bit.ly/4dNpfze" tar><img src={navIcon1} alt="" /></a>
                <a target="_blank" rel="noreferrer" href="https://github.com/asifhussainkaksar"><img src={navIcon2} alt="" /></a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/asif_hussain_17"><img src={navIcon3} alt="" /></a>
              </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
