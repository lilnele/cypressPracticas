describe("Encontrar elementos con Cypress", ()=>{
    beforeEach(function() {
        cy.visit("http://uitestingplayground.com/classattr")
    })

    it("Buscar por su elemento id", () =>{
        cy.get('#navbarSupportedContent')
    })

    it("Buscar elemento por su clase", () =>{
            cy.get(".class1")
            cy.get(".class2")
            cy.get(".class3")
    })

    it("Encontrar elemento por etiqueta", () =>{
            cy.get('button')

    })
    it("Encontrar elemento por su atributo", () =>{
        cy.get('[type="button"]')

    })

    it('Encontrar un elemento con "contains"', () => {
            cy.contains('Home')
            //Tambien podemos ignorar el case sensitive
            cy.contains('hOme' , {matchCase:false})
    })
    it('Buscar un elemento y seleccionar el primer', ()=>{
        cy.viewport(400,400)
        cy.get('button').first()
    })
    it('Buscar un elemento y seleccionar el ultimo', () =>{
        cy.get('button').last()
    })
    it.only('buscar elemento por su indice', () =>{
        cy.get('button').eq(1)
        cy.get('button').eq(2)
        cy.get('button').eq(3)
    })


})