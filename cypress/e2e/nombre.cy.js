describe('Test Suite Name', function(){   // describe es para nombrar nuestro suitecase

    //Hooks, es para añadir pre y pos condiciones a los test
    before(function(){
        cy.log('ejecutando antes de todos los Its')
    })
    after(function(){
        cy.log('Ejecutando despues de los Its')
        
    })
    beforeEach(function(){
            cy.log('ejecutando antes de CADA Its')
        })
     afterEach(function(){
        cy.log('Ejecutando despues de CADA Its')
        
    })

    it('Test Case #1', function(){         //it es para un bloque de codigo, para represanter cada caso de prueba
    
        cy.log('Hola mundo')                //cy muestra un mensaje
    })
     it('Test Case #2', function(){         //it es para un bloque de codigo, para represanter cada caso de prueba
    
        cy.log('Hola mundo 2')                //cy muestra un mensaje
    })

     it('Test Case #3', function(){         //it es para un bloque de codigo, para represanter cada caso de prueba
    
        cy.log('Hola mundo 3')                //cy muestra un mensaje
    })


})                   
