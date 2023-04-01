import { useState, useRef } from "react";
import styles from "./Input.module.css";
const Input = (props) => {
  const [error, setError] = useState(null);
  const inputLocation = useRef("");

  const searchHandler = async (event) => {
    event.preventDefault();
    setError(null);
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${inputLocation.current.value}&appid=47980330b0d3e17d2bc298d8768bbc03`
      );
      if (!response.ok) throw new Error("Something went wrong!");
      const data = await response.json();
      const [{ lat, lon }] = data;
      props.onGet(lat, lon);
    } catch (err) {
      setError("Something went wrong");
      props.onError(error);
    }
    inputLocation.current.value = "";
  };

  return (
    <form className={styles.form} onSubmit={searchHandler}>
      <input type="text" placeholder="Enter Location" ref={inputLocation} />
      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
};

export default Input;
