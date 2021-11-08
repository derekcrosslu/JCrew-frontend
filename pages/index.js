import ProductList from "../components/ProductList";
import store from "./store/index";
import { useEffect, useState } from "react";
import axios from "axios";

// step 1: get json with category-server.js on port 8000
// step 2: render category page
// should have tiles containing each product name, product price, and product image
// step 3: render product page by clicking on each tile
// should have product image, product name, product price, and a small swatch of every color available

function CategoryPage(props) {
  const [data, getData] = useState([]);
  useEffect(() => {
    // this prevents more api request after the initial one
    if (data.length === 0) {
      axios
        .get("http://localhost:9000")
        .then((res) => {
          getData(res.data.productList[0].products);
        })
        .catch((err) => console.error(err));
    } else {
      // products array is saved in redux store
      store.dispatch({
        type: "write_product_list",
        data: data,
      });
    }
  }, [data]);

  return <ProductList />;
}

export default CategoryPage;
