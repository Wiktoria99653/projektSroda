import React from "react";
import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <div className="main_menu">
      <Link className="menu_link" to="/">
        Strona główna
      </Link>
      <Link className="menu_link" to="/catalog">
        Mój katalog filmów
      </Link>
      <Link className="menu_link" to="/contact">
        Kontakt
      </Link>
      <Link className="menu_link" to="/login">
        Logowanie
      </Link>
    </div>
  );
};

export default MainMenu;
