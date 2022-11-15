const { get } = require("lodash")

describe('TESTING NAVIGATION',()=>{
    beforeEach(()=> {
        cy.visit("http://opencart.abstracta.us/")
    })
    
        it('NAVIGATION CORRECT OPENCAR', ()=>{
            cy.title().should('eq','Your Store')
            //cy.log("FIRST NAVIGATION IS CORRECT")
        })
   

        it('NAVIGATION VALIDATION URL', ()=>{
            cy.url().should('eq','http://opencart.abstracta.us/')
            //cy.log("SECOND NAVIGATION IS CORRECT")
        
        })

        it('NAVIGATION USING HTTP', ()=>{
            cy.location('protocol').should('contain','http')
        })
        it('NAVIGATION VALIDATION HOSTNAME',()=>{
            cy.location('hostname').should('eq','opencart.abstracta.us')
        })
       

})