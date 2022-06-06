

/// <reference types="cypress" />
describe('building custom cypress commands', function () {
    //part of before hook
    before(function(){
       //access fixture data
       cy.fixture('example').then(function(regdata){
          this.regdata=regdata
       })
    })
    // test case
    it('Test Case1', function (){
       // launch URL
       cy.visit("https://rahulshettyacademy.com/angularpractice/")
       //data driven from fixture
       cy.get(':nth-child(1) > .form-control')
       .type(this.regdata.name)
       cy.get(':nth-child(2) > .form-control').type(this.regdata.email)
       cy.get("#exampleInputPassword1").type(this.regdata.password)
       cy.get("select").select(this.regdata.gender).should("have.value","Female") 
       cy.get("#inlineRadio2").check().should("be.checked").and("have.value","option2")
       //input[class= 'ng-pristine ng-valid ng-touched']
       cy.get(".ng-pristine").should('have.value',this.regdata.name)
       cy.get(':nth-child(1) > .form-control').should('have.attr',"minlength","2")
       cy.get('#inlineRadio3').should('be.disabled');
       cy.pause()
       cy.get(':nth-child(2) > .nav-link').click()

       //this.regdata.productName

       this.regdata.productName.forEach((element) => {
         cy.selectProduct(element)
       });




      // cy.selectProduct('Blackberry')
       //cy.selectProduct('Samsung Note 8')
       
        

      
    });
 }); 