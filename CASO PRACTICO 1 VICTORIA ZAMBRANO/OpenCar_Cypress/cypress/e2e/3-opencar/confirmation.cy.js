describe("TESTING CHECKOUT",()=>{
    beforeEach(()=> {
        cy.visit("https://opencart.abstracta.us/index.php?route=checkout/checkout")
    })
    context("GUEST CHECKOUT",()=>{

    
        it('CHECKOUT', ()=>{
            cy.get("input[name='account'][value='guest']").check()
            cy.get("#button-account").check()
            cy.get("input[name='firstname']").should('have.value',"Gema")
            cy.get("input[name='lastname']").should('have.value',"Zambrano")
            cy.get("input[name='email']").should('have.value',"vicky_victoriazam@hotmail.com")
            cy.get("input[name='telephone']").should('have.value',"0981795712")
            cy.get("input[name='company']").should('have.value',"Testing SA")
            cy.get("input[name='address_1']").should('have.value',"Eloy Alfaro")
            cy.get("input[name='address_2']").should('have.value',"Juan Molineros")
            cy.get("input[name='city']").should('have.value',"Quito")
            cy.get("input[name='postcode']").should('have.value',"170503")
            cy.get("#input-payment-country").select(52)
            cy.get("#input-payment-zone").select(19)
            cy.get("#button-guest").click()
            cy.get("#button-shipping-method").click()
            cy.get("input[name='agree'][value='1']").check()
                .should('be.checked')
            cy.get("#button-payment-method").click()
            cy.get("#button-confirm").click()



        })
       
    })
})