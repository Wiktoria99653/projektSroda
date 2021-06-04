import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

const SearchBar = ({ userSearch }) => {
  const userTypedText = (e) => {
    userSearch(e.target.value);
  };

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Wpisz tytuł serialu lub nazwisko reżysera"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        onChange={userTypedText}
      />
    </InputGroup>
  );
};

export default SearchBar;
