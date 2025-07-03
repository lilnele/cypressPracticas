import PaginaPrincipal from '../support/pageObjects/PaginaPrincipal';

const mainPage = new PaginaPrincipal()

describe('Son pruebas sobre youtube para practicar', function(){


    beforeEach('Hay que navegar al diccionario' , ()=>{
        mainPage.getUrl()
        
    })


    it.skip('Comprobar diccionario coreano-espanol', ()=>{
        cy.get("h2.mt20.slogan").should('have.text', 'Diccionario didáctico coreano-español')
    })

    it.skip('Ir a diccionario Korean-English', ()=>{
        cy.contains('Coreano－Inglés').click()
        cy.get("h2.mt5.slogan").should('have.text', "Korean-English Learners' Dictionary")
        cy.log('Acceso a diccionario coreano-inglés correcto')
    })
    it.skip('Buscar palabra por categoria Alimentacion-comida', ()=>{
        cy.contains('Búsqueda por categoría').click()
        cy.contains("Buscar por campo semántico").click()
        cy.contains(" Alimentación").click()
        cy.contains(" Fruta").click()
        cy.get('a.btn.btnB.blue').click()
        cy.log('Se han buscado palabras coreanas relacionadas con fruta')
    })
    it.skip('Buscar por tema y situacion, Usando transporte', () =>{
         mainPage.buscarCategoria()
         cy.contains("Buscar por temas y situaciones").click()
         cy.contains("Usando transporte").click()
         cy.get('a.btn.btnB.blue').click()
         cy.log('Se han buscado palabras relacionadas por el tema: Usando transporte')
    })
      it.skip('Buscar por tema y situacion, desactivar casilla de seleccion, volver a buscar y comprobar que no devuelve nada', () =>{
         mainPage.buscarCategoria()
         buscarTema().click()
         cy.contains("Usando transporte").click()
         cy.get('a.btn.btnB.blue').click()
        cy.get(".btn_sm.navyL").click()
        cy.get('a.btn.btnB.blue').click()
        cy.get(".noarticle.manyLang9").should('have.text', 'No hay expresiones que empiecen con esa palabra.')
         cy.log('Comprobación que al no seleccionar un tema y buscar, no encuentra nada')
    })

        it.skip('Ir al instituto nacional de lengua coreana desde la pagina principal' , ()=>{
            cy.get("#Buttom_Global_nationCode").select('Instituto Nacional de la Lengua Coreana')
            cy.get('a.goBtn.manyLang9').click()
           cy.log('Acceso al Instituo Nacional de Lengua coreana correcto')
        })
        it.skip('Buscar la palabra Avestruz' , ()=>{
            cy.fixture('example').then((user) =>{
            mainPage.getBarraBusqueda().type(user.word)
            })
            cy.get(".search_btn").click()
            cy.contains("Resultado de búsqueda de términos que contengan",  {matchCase:false})
            cy.log("Comprobacion que busca la palabra correctamente")
        })
        it.skip('Comporbacion que la palabra avestruz no tiene Acepciones', ()=>{
            cy.fixture('example').then((user) =>{
            mainPage.getBarraBusqueda().type(user.word)
            })
            cy.get(".search_btn").click()
            cy.contains("Acepción ").click()
            cy.contains('No hay resultados',  {matchCase:false})
              cy.log("Comprobacion que  la palabra avestruz no tiene acepciones correctamente")
        })
        it.skip('Interceptar respuest avestruz', ()=>{
                cy.intercept('GET', '**/spa/dicMarinerSearch/search**').as('buscarPalabra')
                cy.fixture('example').then((user) =>{
            mainPage.getBarraBusqueda().type(user.word)
                 cy.get(".search_btn").click()
                 cy.wait('@buscarPalabra',{ timeout: 10000 }).then((intercepcion) =>{
                expect(intercepcion.request.url).to.include(user.word)
            })
            })
       
            

        })
        
})