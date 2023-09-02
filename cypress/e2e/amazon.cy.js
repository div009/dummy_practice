describe('CSSLocator',()=>{
    it('csslocator', ()=>{
        cy.visit('https://www.amazon.in/')
        cy.get("[id='twotabsearchtextbox']").click().type('T-Shirt');
        cy.get("[type='submit']").click();
        cy.xpath("//*[@data-component-type='s-search-result']").should('have.length',60)
    })
    
})

