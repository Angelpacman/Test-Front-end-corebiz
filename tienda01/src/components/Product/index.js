import styles from "./index.module.sass";


export default function Product({ product }) {
  const { productName, stars, imageUrl, listPrice, price} = product;
  return (
    <div className={styles.product}>
      <img src={imageUrl} className={styles.imageUrl} />
      <p className={styles.productName}>{productName}</p>
      <p className={styles.stars}>{stars} de 5 estrellas</p>
      {/* <p className={styles.productId}>{productId}</p> */}
      <p className={styles.listPrice}>de ${listPrice}</p>
      <p className={styles.price}>por: ${price}</p>
    </div>
  );
}
