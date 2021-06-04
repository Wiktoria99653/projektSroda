import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <h4>Katalog filmowy</h4>
            Najlepsze seriale według użytkowników Filmwebu.
            <p className="header__description">
              Aplikacja zrealizowna w technologii React.
            </p>
          </Col>
          <Col>
            <h5>Przydatne linki</h5>
            <div className="links">
              <ul>
                <li>
                  <a
                    className="footer__link"
                    href="https://www.filmweb.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Filmweb
                  </a>
                </li>
                <li>
                  <a
                    className="footer__link"
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    YouTube
                  </a>
                </li>
                <li>
                  <a
                    className="footer__link"
                    href="https://www.filmweb.pl/ranking/serial"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ranking seriali
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
