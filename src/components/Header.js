import React from "react";
import { Button, Jumbotron } from "react-bootstrap";

const Header = () => {
  return (
    <Jumbotron className="jumbo">
      <h1 className="jumbo__title">Katalog filmowy</h1>
      <p className="jumbo__text">
        Katalog najwyżej ocenianych filmów w historii polskiego i światowego
        kina.
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
