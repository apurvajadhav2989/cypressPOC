

/// <reference types="cypress" />

import HomePage from "../../support/pageObjects/HomePage"
import ShopPage from "../../support/pageObjects/ShopPage"
import CheckoutPage from "../../support/pageObjects/CheckoutPage"
//import cypress from "cypress";
//import Cypress;

describe('page object demo <>', function () {
//part of before hook
before(function(){
   //access fixture data
   cy.fixture('example').then(function(regdata){
      this.regdata=regdata
   })
})
// test case
it('Test Case1', function (){

   const homepage = new HomePage()
   const shoppage  = new ShopPage()
   const checkoutpage = new CheckoutPage()


   // launch URL
   cy.visit("https://rahulshettyacademy.com/angularpractice/")
   //data driven from fixture
   homepage.getNameBox().type(this.regdata.name)
   homepage.getEmailBox().type(this.regdata.email)
   homepage.getPasswordBox().type(this.regdata.password)
   homepage.getGenderDD().select(this.regdata.gender).should("have.value","Female")
   homepage.getCheckBoxes().check().should("be.checked").and("have.value","option2")
   
   homepage.getTwoWayBindingDataBox().should('have.value',this.regdata.name)
   homepage.getNameBox().should('have.attr',"minlength","2")
   homepage.getEnterpreneurCheckBox().should('be.disabled');

   homepage.getShopLink().click()

   //this.regdata.productName

   this.regdata.productName.forEach((element) => {
   cy.selectProduct(element)
   });
   
   shoppage.getCheckOutButton().click()
   Cypress.config('defaultCommandTimeout',8000)
   checkoutpage.getCheckOutButton().click() 
// checkoutpage.getCountryBox().type("India")  
   //auto select India
   checkoutpage.getCountryBox().type("India")

   checkoutpage.getCheckBoxToAgreeWithTermConditions().check({force: true})
   checkoutpage.getPurchaseButton().click()
   checkoutpage.getSuccessText().contains("Success")


})
   


});
