import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Catalog from "../components/Catalog";

const CatalogPage = () => {
  const [filmFilter, setFilmFilter] = useState(null);
  const userSearch = (data) => {
    setFilmFilter(data);
  };
  return (
    <>
      <SearchBar userSearch={userSearch} />
      <Catalog filter={filmFilter} />
    </>
  );
};

export default CatalogPage;
