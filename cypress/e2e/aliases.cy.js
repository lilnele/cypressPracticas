

describe('Variables y Aliases', ()=>{

beforeEach(function(){

    cy.fixture('example.json').as('exampleData')
})

it.skip('We can not assign or return values from cypress commands', function(){
    cy.visit('http://uitestingplayground.com/')
    const navLink = cy.get('.nav-link')    //No es posible asignacion de esta manera
    navLink.click()  
})
it.skip('Closures: We can return values from cypress commands' , function(){
    cy.visit('http://uitestingplayground.com/')
    cy.get('.nav-link').then($element =>{

            cy.log($element[0].href)
            expect($element[0].href).to.be.equal('http://uitestingplayground.com/home')

    })
})

it.skip('Accesing variables from fixures using this.* (We should avoid using this.*)', function(){

const data = this.exampleData
cy.log(data.name)

})
it.skip('Accessing variables from fixtures using cy.get()', function(){
    cy.get('@exampleData').then(data =>{
        cy.log(data)
    })
})
it('Aliasing elements', function(){
    cy.visit('http://uitestingplayground.com/')
    cy.get('.nav-link').as('links')
    cy.get('@links').first().click

})

})