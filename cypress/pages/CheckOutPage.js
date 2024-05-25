class CheckOutPage {

    getFirstLastNameDelivery() { return cy.get('#address_delivery > .address_firstname') };
    getCompanyNameDelivery() { return cy.get('#address_delivery > :nth-child(3)') };
    getStreetDelivery() { return cy.get('#address_delivery > :nth-child(4)') };
    getStreetAddressDelivery() { return cy.get('#address_delivery > :nth-child(5)') };
    getCityStateZipCodeDelivery() { return cy.get('#address_delivery > .address_city') };
    getCountryDelivery() { return cy.get('#address_delivery > .address_country_name') };
    getPhoneNumberDelivery() { return cy.get('#address_delivery > .address_phone') };

    getFirstLastNameBilling() { return cy.get('#address_invoice > .address_firstname') };
    getCompanyNameBilling() { return cy.get('#address_invoice > :nth-child(3)') };
    getStreetBilling() { return cy.get('#address_invoice > :nth-child(4)') };
    getStreetAddressBilling() { return cy.get('#address_invoice > :nth-child(5)') };
    getCityStateZipCodeBilling() { return cy.get('#address_invoice > .address_city') };
    getCountryBilling() { return cy.get('#address_invoice > .address_country_name') };
    getPhoneNumberBilling() { return cy.get('#address_invoice > .address_phone') };

    getCommentField() { return cy.get('.form-control') };
    getPlaceOrderButton() { return cy.get('.btn.btn-default.check_out') };
    getNameOnCardField() { return cy.get('input[data-qa="name-on-card"]') };
    getCardNumberField() { return cy.get('input[data-qa="card-number"]') };
    getCvcField() { return cy.get('input[data-qa="cvc"]') };
    getExpiryMonthField() { return cy.get('input[data-qa="expiry-month"]') };
    getExpiryYear() { return cy.get('input[data-qa="expiry-year"]') };
    getPayAndConfirmButton() { return cy.get('[data-qa="pay-button"]') };
    getOrderInfo() { return cy.get('.col-sm-9 > p') };
    getContinueButton() { return cy.get('[data-qa="continue-button"]') };
    
}

export default CheckOutPage;