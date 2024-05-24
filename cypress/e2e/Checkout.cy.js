const { Catalog } = require("../pageObjects/Catalog");

beforeEach(() => {
    cy.visit("https://magento.softwaretestingboard.com/");
});

describe("Checkout Test Suite", () => {

    it('Can add a product to the cart', () => {
        const productName = "Proteus Fitness Jackshirt";
        const catalog = new Catalog;

        catalog.goToCatalog("Men", "Tops", "Jackets");

        //Add product to the cart
        catalog.addProductToCart(productName, "XS", "Black");

        //Assert mini cart count is 1

        catalog.assertMiniCartCount(1);

        //Assert product is in the cart

        catalog.assertProductInCart(productName);
    });

});
