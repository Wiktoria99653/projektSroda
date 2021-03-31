import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <h4>Katalog filmowy</h4>
            Aplikacja testowa dla semestru IV
          </Col>
          <Col>
            <h5>Przydatne linki</h5>
            <div className="links">
              <ul>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
