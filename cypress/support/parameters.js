export let myURL = "https://www.saucedemo.com/";

const itemnames = [];

let currentDate = new Date();
export let picname = currentDate.toString();

Cypress.Commands.add("login", (username, password) => {
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-button"]').click();
});

Cypress.Commands.add("addtocart", (numberofitems) => {
  for (let i = 0; i < numberofitems; i++) {
    cy.get(".btn").eq(i).click();
  }
});

Cypress.Commands.add("removefromcart", (numberofitems) => {
  for (let i = 0; i < numberofitems; i++) {
    cy.get(".btn").eq(i).click();
  }
});

Cypress.Commands.add("addcertainitems", (item1, item2) => {
  cy.get(".inventory_item_name ")
    .each((itemname) => {
      itemnames.push(itemname.text());
    })
    .then(() => {
      for (let i = 0; i < itemnames.length; i++) {
        if (itemnames[i].includes(item1) || itemnames[i].includes(item2)) {
          cy.get(".btn").eq(i).click();
        }
      }
    });
});
