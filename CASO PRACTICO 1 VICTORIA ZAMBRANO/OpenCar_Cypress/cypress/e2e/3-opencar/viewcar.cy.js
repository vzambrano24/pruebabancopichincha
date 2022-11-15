describe("TESTING VIEW CAR",()=>{
    beforeEach(()=> {
        cy.visit("http://opencart.abstracta.us/")
    })
        it('EMPTY CAR VALIDATION',()=>{
            cy.get("#cart").click()

        })
        context("VIEW CAR",()=>{

    
            it('VIEW ITEMS CAR', ()=>{
    
                cy.get('#menu > .collapse > ul > li').eq(2).click()
                cy.get('.open > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > a').click()
                cy.log('SELECT MONITOR')
                cy.get(':nth-child(1) > .product-thumb > :nth-child(2) > .caption > h4 > a').click()
                cy.log('COMPLETE DE FORMS')
    
                cy.get("#button-upload222").click()
                cy.get("#form-upload")
                const fixtureFile = 'deposito-img.png';
                cy.get('input[type="file"]').attachFile(fixtureFile);
    
                cy.get("input[name='option[218]'][value='7']").check()
                cy.get("input[name='option[223][]'][value='10']").check()
                .should('be.checked')
                cy.get("input[name='option[223][]'][value='11']").check()
                .should('be.checked')
                cy.get("input[name='option[208]'][value='test']").should('have.value',"test")
                cy.get("#input-option217").select(3)
                cy.get("#input-option209").type("example of testing").should('have.value',"example of testing")
    
                cy.get("input[name='option[219]'][value='2011-02-20']")
                cy.get("input[name='option[221]'][value='22:25']")
                cy.get("input[name='option[220]'][value='2011-02-20 22:25']")
                cy.get("input[name='quantity'][value='2']").should('have.value',"2")
                cy.get("#button-cart").click()
    
                cy.get("#cart").click()
                cy.get('[href="http://opencart.abstracta.us:80/index.php?route=checkout/cart"] > strong')
                
              
            })
       
        })
    })