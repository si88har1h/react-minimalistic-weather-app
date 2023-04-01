import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <p className={styles.name}>{props.data.name}</p>
      <p className={styles.temp}>{props.data.temp}°C</p>
      <p className={styles.weather}>{props.data.weather}</p>
    </header>
  );
};

export default Header;
