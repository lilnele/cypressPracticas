// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mochawesome-reporter/register'
/*
    before(function(){
        cy.log('Ejecutando BEFORE GLOBAL')
    })
    after(function(){
        cy.log('Ejecutando AFTER GLOBAL')
        
    })
    beforeEach(function(){
            cy.log('EJECUTANDO BEFORE EACH GLOBAL')
        })
     afterEach(function(){
        cy.log('EJECUTANDO AFTER EACH GLOBAL')
        
    })
        */
       Cypress.on('uncaught:exception', (err, runnable) => {
  // previene que Cypress falle por errores JS no manejados del sitio
  return false;
});