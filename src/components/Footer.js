import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <h4>Katalog filmowy</h4>
            Najlepsze filmy w historii kina
            <p className="header__description">
              Aplikacja zrealizowna w technologii React. Autor: Andrzej Herman
            </p>
          </Col>
          <Col>
            <h5>Przydatne linki</h5>
            <div className="links">
              <ul>
                <li>
                  <a
                    className="footer__link"
                    href="https://www.imdb.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Baza filmów IMDB
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
                    href="https://www.oscars.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Amerykańska Akademia Filmowa
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
