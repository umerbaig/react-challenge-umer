import styles from "../logos.module.css";

const LogoItem = ({ name, id }) => {
  return (
    <div className={styles.imageContainer}>
      <img src={`https://placehold.co/600x400`} alt={name} />
      {name}
      <div className={styles.overlay}>
        <div className={styles.overlayText}>{id}</div>
      </div>
    </div>
  );
};

export default LogoItem;
