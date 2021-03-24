import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Catalog from "./components/Catalog";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <Catalog />
      <Footer />
    </div>
  );
};

export default App;
