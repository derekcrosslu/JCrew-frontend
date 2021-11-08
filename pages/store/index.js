import { createStore } from "redux";

const counterReducer = (
  state = { products: [], favorite_products: [], product_page_selected: [] },
  action
) => {
   // saving products array to redux store
  // also hiding duplicate products from category page
  if (action.type === "write_product_list") {
    const products = action.data;
    return {
      products: [
        ...products.filter(
          (v, i, a) => a.findIndex((t) => t.productCode === v.productCode) === i
        ),
      ],
      favorite_products: [...state.favorite_products],
      product_page_selected: [...state.product_page_selected],
    };
  }

  // when user clicks on tile, an action is trigger and product data is saved to redux
  if (action.type === "navigate_product_page") {
    const shallow_copy_products = state.products.slice();
    return {
      products: [...state.products],
      favorite_products: [...state.favorite_products],
      product_page_selected: [
        shallow_copy_products[
          shallow_copy_products.findIndex(
            (x) => x.productCode === action.product_code
          )
        ],
      ],
    };
  }
  return state;
};

const store = createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

export default store;
