import ProductPageComponent from "../../components/ProductPageComponent";
import { useRouter } from "next/router";
import { route } from "next/dist/server/router";
import { useSelector } from "react-redux";
import store from "../../pages/store/index";

function ProductPage() {
  const router = useRouter();

  const [product_selected] = useSelector(
    (state) => state.product_page_selected
  );
console.log('product_selected',product_selected);
  return (
    // <div>hola</div>
    <ProductPageComponent product_selected={product_selected} />
  );
}

export default ProductPage;
