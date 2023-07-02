import React from "react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Application } from "../../src/client/Application";
import { createStore } from "redux";

describe("Cart", () => {
  const store = createStore(() => ({
    cart: {
      1: {
        id: 1,
        name: "name",
        price: "1",
        description: "description",
        material: "material",
        color: "color",
      },
    },
    products: [],
    details: {},
  }));

  const VALID_PHONE_NUMBER = "+71234567890";

  it("Инпут для номера телефона валиден, если номер корректный", async () => {
    const { getByRole } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/cart"]}>
          <Application />
        </MemoryRouter>
      </Provider>
    );

    const phoneInput = getByRole("textbox", { name: /phone/i });
    const checkoutButton = getByRole("button", { name: /checkout/i });

    await userEvent.type(phoneInput, VALID_PHONE_NUMBER);
    await userEvent.click(checkoutButton);

    expect(phoneInput).not.toHaveClass("is-invalid");
  })
});
