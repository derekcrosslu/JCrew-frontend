import styles from "../styles/Home.module.css";
import API from "./api/category.json"
import Image from 'next/image'

// step 1: get json with category-server.js on port 8000
// step 2: render category page
// should have tiles containing each product name, product price, and product image
// step 3: render product page by clicking on each tile
// should have product image, product name, product price, and a small swatch of every color available


function HomePage(props) {
  // Filtering duplicate products so category page looks less repetitive 
  const productsArray = props.categories.productList[0].products;
  const uniqueProducts = productsArray.filter(
    (v, i, a) => a.findIndex((t) => t.productCode === v.productCode) === i
  );
  console.log(uniqueProducts);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1 className={styles.title}> Categories </h1>
        <div className={styles.grid}>
          {uniqueProducts.map((product, index) => {
            const {
              colors,
              defaultColorCode,
              productCode,
              productDescription,
              productId,
              listPrice,
              imageSrc = "https://www.jcrew.com/s7-img-facade/" +
                    productCode +
                    "_" +
                    defaultColorCode +
                    "_m"
            } = product;
            return (
              <div className={(styles.card, "")} key={index}>
                <Image src={imageSrc} width="300" height="300" />
                <div className={styles.code}>{productDescription}</div>
                <div className={styles.code}>Price: {listPrice.formatted}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      categories: API,
    },
  };
}

export default HomePage;
