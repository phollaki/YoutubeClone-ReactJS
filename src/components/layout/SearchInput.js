import React from "react";

import { Fragment } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import styles from "./SearchInput.module.css";
import { useState } from "react";
function SearchInput() {
  const [enteredText, setEnteredText] = useState("");
  const inputHandler = (event) => {
    setEnteredText(event.target.value);
  };
  const submitHandler = () => {
    setEnteredText("");
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.input}>
        <input
          placeholder="Keresés"
          value={enteredText}
          onChange={inputHandler}
        ></input>
      </div>
      <div className={styles.icon}>
        <Link to="/search">
          <SearchIcon className={styles.searchIcon} />
        </Link>
      </div>
    </form>
  );
}

export default SearchInput;
