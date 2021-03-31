import React from "react";
import { Button, Jumbotron } from "react-bootstrap";

const Header = () => {
  return (
    <Jumbotron className="jumbo">
      <h1>Katalog filmowy</h1>
      <p>
        Katalog najwyżej oceniamych filmów w historii polskiego i światowego
        kina.
      </p>
      <p>
        <Button variant="primary">Przejdź do Filmwebu</Button>
      </p>
    </Jumbotron>
  );
};

export default Header;
