import React from "react";

const Catalog = ({ filter }) => {
  return (
    <div className="catalog">
      <h6>Znalezione filmy</h6>
      <p>{filter}</p>
    </div>
  );
};

export default Catalog;
