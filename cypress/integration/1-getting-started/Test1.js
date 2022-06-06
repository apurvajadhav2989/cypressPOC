/// <reference types="cypress" />
describe('Fixture intrduction <practice>', () => 
{
  before(function(){
      //access fixture data
      cy.fixture('example.json').then(function(data){
         this.data=data
      })//.then fun ends
   
    
    })//before ends

  it('fills the form', () => {

    cy.visit('https://rahulshettyacademy.com/angularpractice/')

    cy.get(":nth-child(1) > .form-control").type("Apurva")
    cy.get(':nth-child(2) > .form-control').type("apurva.jadhav@gslab.com")
    cy.get("#exampleInputPassword1").type("@purva")
    cy.get("select").select("Female").should("have.value","Female") 
    cy.get("#inlineRadio2").check().should("be.checked").and("have.value","option2")

  })//it ends

    
})//describe ends
