/// <reference types="cypress" />
describe('assertions Test <practice>', function () {
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

     
   });
});