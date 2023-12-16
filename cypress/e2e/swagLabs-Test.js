///<reference types="Cypress"/>

import { myURL, picname } from "../support/parameters";

describe("Swag Labs", () => {
  it.skip("Login and then add items then remove some of them", () => {
    cy.visit(myURL);
    cy.login("standard_user", "secret_sauce");
    cy.addtocart(4);
    cy.removefromcart(2);
  });

  it("add specific items", () => {
    cy.visit(myURL);
    cy.login("standard_user", "secret_sauce");
    cy.addcertainitems("Sauce Labs Backpack", "Sauce Labs Bolt T-Shirt");
    cy.screenshot(picname);
  });
});
