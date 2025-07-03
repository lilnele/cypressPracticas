/// <reference types="cypress" />

describe('Interacciones basicas con Cypress y aserciones', () =>{

    it('validar que la pagina se carga correctamente y que el titulo es correcto', ()=>{

        cy.visit('http://uitestingplayground.com/loaddelay')
        cy.title().should('eq', 'Load Delays')
    })

    it('Click en un elemento, esperar a que se muestre(aumentando el timeout de espera que por defecto es 400ms) y validar que se muestre' , () =>{
        cy.visit('http://uitestingplayground.com/clientdelay')
        cy.get('#ajaxButton').click()
        cy.get('.bg-success' , {timeout:20000}).should('be.visible')
    })
    it("Escribir en un input y validar que se muestre el texto en un boton" , () =>{
            cy.visit('http://uitestingplayground.com/textinput')
            cy.get('#newButtonName').type('Hola Mundo')
            cy.get('#updatingButton').click()
            cy.get('#updatingButton').should('have.text' , 'Hola Mundo')

    })
    it.only('Validar texto de alertas' , ()=>{
        cy.visit('http://uitestingplayground.com/alerts')
        cy.get('#alertButton').click()
        cy.on('window:alert', (srt) =>{
                expect(srt).to.equal('Today is a working day.\nOr less likely a holiday.')
        })
    })
})