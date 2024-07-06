/// <reference types="Cypress" />​
/// <reference types="cypress-iframe" />​
import 'cypress-iframe';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
beforeEach( function(){ 
    cy.fixture('example').then(function(data)
    {
        this.data = data 
    })
})
Given ('I open demoblaze Ecommerce website', function(){
        // cy.visit('http://www.demoblaze.com/')
    cy.navigateToPage('http://www.demoblaze.com/')
})
When ('I click the login Button', function(){
    // cy.get('#login2').click()
    cy.selectlogin()
})

Then ('I enter a valid Username', function(){
    // cy.get('#loginusername').type(this.data.username);
    cy.wait(3000)
    cy.validusername(this.data.username);
})

When ('I entered a Valid password', function(){
    cy.wait(3000)
    cy.validatepassword(this.data.password)
})

Then ('I click on sign in Button', function(){
    // cy.get('button[onclick='logIn()']').click()
    cy.selectsignin()
})

When ('I Validate successful login to my account', function(){
    //cy.contains('Welcome Christabel').should('be.visible');
    // cy.get('#nameofuser').should('exist')
    cy.wait(3000)
    cy.get('#nameofuser').should('contain.text', 'Welcome ' + this.data.username);
})