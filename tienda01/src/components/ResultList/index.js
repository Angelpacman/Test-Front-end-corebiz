import products from "../../constants/products";

//Componentes
import Product from "../Product";

//Estilos
import styles from "./index.module.sass";

export default function ResultList({ word }) {
  return (
    <div className={styles.resultList}>
      {products.map((product, key) => {
        const { productName } = product;
        return productName.includes(word) && <Product key={key} product={product} />;
      })}
    </div>
  );
}
