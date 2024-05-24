class Catalog {

    addProductToCart(name, size, color) {
        cy.contains('.product-item-info', name).within(() => {
            cy.findByRole("option", { name: size }).click();
            cy.findByRole("option", { name: color }).click();
            cy.findByRole("button", { name: "Add to Cart" }).click({ force: true });
        });
    }

    assertMiniCartCount(count) {
        cy.get(".counter-number").should("contain.text", count.toString());

    }
    goToCatalog(gender, category, type) {
        cy.findByRole("menuitem", { name: gender }).trigger('mouseover');
        cy.findByRole("menuitem", { name: category }).trigger('mouseover');
        cy.findByRole("menuitem", { name: type }).click();
    }

    assertProductInCart(name) {
        cy.get(".showcart").click();

        const miniCartDialog = cy.get(".block-minicart");

        miniCartDialog.get(".product-item-name").should("contain.text", name);
    }
}

module.exports = { Catalog };