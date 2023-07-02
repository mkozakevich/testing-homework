import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Application } from "../../src/client/Application";
import { createStore } from "redux";

describe("Product", () => {
  const store = createStore(() => ({
    cart: {},
    products: [],
    details: {
      1: {
        id: 1,
        name: "name",
        price: "1",
        description: "description",
        material: "material",
        color: "color",
      },
    },
  }));

  it("Кнопка должна быть большой", async () => {
    const { getByRole } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/catalog/1"]}>
          <Application />
        </MemoryRouter>
      </Provider>
    );

    const button = getByRole("button", { name: "Add to Cart" });

    expect(button).toHaveClass("btn-lg");
  });
});
