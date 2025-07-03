class PaginaPrincipal{
    getUrl(){
        return cy.visit('https://krdict.korean.go.kr/spa/mainAction')
    }
    getBarraBusqueda(){
        return cy.get("#mainSearchWord")
    }
    buscarCategoria(){
        return cy.contains('Búsqueda por categoría').click()
    }
    buscarTema(){
        return cy.contains("Buscar por temas y situaciones")
    }
}

export default PaginaPrincipal;