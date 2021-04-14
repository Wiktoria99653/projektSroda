import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const SearchBar = ({ userSearch }) => {
  const [text, setText] = useState("");

  const userTypedText = (e) => {
    setText(e.target.value);
  };

  const sendText = () => {
    userSearch(text);
  };

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Wpisz tytuł filmy lub nazwisko reżysera"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        value={text}
        onChange={userTypedText}
      />
      <InputGroup.Append>
        <Button
          variant="primary"
          onClick={sendText}
          className="searchBar__search"
        >
          Szukaj
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default SearchBar;
