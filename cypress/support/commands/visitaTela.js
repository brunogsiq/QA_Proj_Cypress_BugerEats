/// <reference types="cypress" /> 

//import { telaHome } from "../../pageObjects/01_telaHome/telaHome";

Cypress.Commands.add('visitarHome', () =>
{
    cy.visit("https://buger-eats.vercel.app/");

    cy.get("main > h1")
        .should("be.visible")
});

Cypress.Commands.add('visitarCadastre_se', () =>
{
    visitarHome();

    cy.get("main > a")
        .click();

    cy.get("form > h1")
        .should("be.visible");
});