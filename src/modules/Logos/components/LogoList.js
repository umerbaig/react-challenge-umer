import styles from '../logos.module.css';
import LogoItem from "./LogoItem";

const LogoList = ({ data }) => {
  return (
    <div className={styles.grid}>
      {data.map((item) => (
        <div key={item.source_items.id} className={styles.gridItem}>
          <LogoItem name={item.name} id={item.source_items.id} />
        </div>
      ))}
    </div>
  );
};

export default LogoList;
