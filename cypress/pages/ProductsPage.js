class ProductsPage {

    getAllProductsHeading() { return cy.get('.title') };
    getAmountOfTitle() { return cy.get('.productinfo > p') };
    getAmountOfPrice() { return cy.get('.productinfo > h2') };
    getAmountOfImg() { return cy.get('.productinfo > img') };
    getViewProductButton(number) { return cy.get(`li > a[href="/product_details/${number}"]`) };
    getSearchProductField() { return cy.get('#search_product') };
    getSubmitSearchButton() { return cy.get('#submit_search') };
    getProductNames() { return cy.get('.overlay-content > p') };
    getAddToCartButton(productId) { return cy.get(`a[data-product-id=${productId}]`) };
    getContinueShoppingButton() { return cy.get('.modal-footer > .btn') };
    getViewCartButton() { return cy.get('a[href="/view_cart"]') };
    getCategoryTitle() {return cy.get('.title') };
    getWomenCategoryButton() { return cy.get('a[href="#Women"]') };
    getMenCategoryButton() { return cy.get('a[href="#Men"]') };
    getKidsCategoryButton() { return cy.get('a[href="#Kids"]') };
    getDressSubcategoryButton() { return cy.get('#Women > .panel-body > ul > :nth-child(1) > a') };
    getJeansSubcategoryButton() { return cy.get('#Men > .panel-body > ul > :nth-child(2) > a') };
    getBrandButton(id) { return cy.get(`.brands-name > .nav > :nth-child(${id}) > a`) };
}

export default ProductsPage;