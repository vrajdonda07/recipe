import styles from "./item.module.css";

export default function Item({item}) {
  return (
    <div>
      <div className={styles.itemContainer}>
        <div className={styles.imgContainer}></div>
        <img
          className={styles.iamge}
          src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
        ></img>
        <div className={styles.nameContainer}>
          <div className={styles.itemName}>{item.name}</div>
          <div className={styles.itemAmount}>
            {item.amount}
            {item.unit}
          </div>
        </div>
      </div>
    </div>
  );
}
