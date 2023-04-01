import styles from "./Details.module.css";
const Details = (props) => {
  return (
    <div className={styles.details}>
      <div className={styles.detail}>
        <p>{props.data.feels_like}°C</p>
        <p>Feels Like</p>
      </div>
      <div className={styles.detail}>
        <p>{props.data.humidity}%</p>
        <p>Humidity</p>
      </div>
      <div className={styles.detail}>
        <p>{props.data.winds} MPH</p>
        <p>Winds</p>
      </div>
    </div>
  );
};

export default Details;
