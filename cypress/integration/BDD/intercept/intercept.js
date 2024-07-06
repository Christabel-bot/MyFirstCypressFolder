/// <reference types="Cypress" />​
/// <reference types="cypress-iframe" />​
import 'cypress-iframe';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
beforeEach( function(){ 
    cy.fixture('example').then(function(data)
    {
        this.data = data 
    })
cy.intercept('https://api.demoblaze.com/viewcart').as('Cartlist')
})

Given ('I open demoblaze Ecommerce website', function(){
    cy.visit('http://www.demoblaze.com/')
})
When ('I click the login Button', function(){
    cy.get('#login2').click()
})

Then ('I enter a valid Username', function(){
    cy.wait(2000)
    cy.get('#loginusername').type(this.data.username);})

When ('I entered a Valid password', function(){
    cy.wait(2000)
    cy.get('#loginpassword').type(this.data.password)
})
Then ('I click on sign in Button', function(){
    cy.wait(2000)
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
})

When ('I Validate successful login to my account', function(){
    //cy.contains('Welcome Christabel').should('be.visible');
    cy.wait(2000)
    // cy.get('#nameofuser').should('exist')
    cy.get('#nameofuser').should('contain.text', 'Welcome ' + this.data.username);
})
When ('I clck the Cart Button' , function(){
    cy.get('a').contains('Cart').click()
})

Then ('I validated list of items in Cart using intercept', function(){
    cy.wait('@Cartlist', { timeout: 10000 })
cy.get('button').contains('Place Order').click()
})