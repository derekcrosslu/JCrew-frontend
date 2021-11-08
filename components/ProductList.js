import ProductItem from "./ProductItem";
import styles from "./ProductList.module.css";
import { useSelector } from "react-redux";

function ProductList(props) {
  const products = useSelector((state) => state.products);
  const imageUrl = "https://www.jcrew.com/s7-img-facade/";

  return (

    <div className={styles.grid}>
      {products.map((product, index) => {
        const {
          colors,
          defaultColorCode,
          productCode,
          productDescription,
          productId,
          listPrice,
          imageSrc = imageUrl + productCode + "_" + defaultColorCode + "_m",
        } = product;
        return (
          <ProductItem
            imageSrc={imageSrc}
            listPrice={listPrice}
            name={productDescription}
            key={index}
            id={productCode}
          />
        );
      })}
    </div>

  );
}

export default ProductList;