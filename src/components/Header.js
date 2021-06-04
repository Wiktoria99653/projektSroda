import React from "react";
import { Button, Jumbotron } from "react-bootstrap";

const Header = () => {
  return (
    <Jumbotron className="jumbo">
      <h1 className="jumbo__title">Katalog seriali</h1>
      <p className="jumbo__text">
      Najlepsze seriale według użytkowników Filmwebu.
      </p>
      <a
        href="https://www.filmweb.pl/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="primary">Przejdź do Filmwebu</Button>
      </a>
    </Jumbotron>
  );
};

export default Header;
