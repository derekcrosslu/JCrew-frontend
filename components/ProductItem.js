import { useRouter } from 'next/router';
import Image from "next/image";
import styles from "./ProductItem.module.css";
import store from "../pages/store/index";


function ProductItem(props) {
    const router = useRouter();

  function showProductPage() {
        store.dispatch({
          type: "navigate_product_page",
          product_code: props.id,
        });
        router.push('/'+props.id)
    }
  return (
    <button className={styles.tile} onClick={showProductPage}>
      {/*// using Nextjs Image component to optimize loading and responsiveness*/}
      <Image src={props.imageSrc} width="400" height="400" />
      <div >
        <h2 className={styles.code}>{props.name}</h2>
        <p className={styles.code}>Price: {props.listPrice.formatted}</p>
      </div>
    </button>
  );
}

export default ProductItem;
