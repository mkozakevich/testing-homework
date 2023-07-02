import { CartApi, ExampleApi } from "../../src/client/api";
import { addToCart, initStore } from "../../src/client/store";

describe("Store", () => {
  const api = new ExampleApi("/hw/store");
  const cart = new CartApi();
  let store: any = null;

  const cartItem = {
    id: 1,
    name: "name",
    price: 1,
    description: "description",
    material: "material",
    color: "color",
  };

  beforeEach(() => {
    store = initStore(api, cart);
  });

  it("Продукты должны добавляться в корзину", () => {
    store.dispatch(addToCart(cartItem));

    const cartItemsIds = Object.keys(store.getState().cart);

    expect(cartItemsIds.length).toBe(1);
  });
});
