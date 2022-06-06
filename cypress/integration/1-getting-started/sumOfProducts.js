

/// <reference types="cypress" />
import HomePage from "../../support/pageObjects/HomePage"
import ShopPage from "../../support/pageObjects/ShopPage"
import CheckoutPage from "../../support/pageObjects/CheckoutPage"

describe('sum of products demo  <home>', function () {
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
cy.visit(Cypress.env("url")+"angularpractice/")
homepage.getShopLink().click()

//this.regdata.productName

this.regdata.productName.forEach((element) => {
cy.selectProduct(element)
});

shoppage.getCheckOutButton().click()
//Cypress.config('defaultCommandTimeout',8000)

//sum of product logic
var sum = 0
cy.get("tr td:nth-child(4) strong").each(($el, index, $list) => {

cy.log($el.text())
const amountInString = $el.text()
var amountInFloat= amountInString.split(" ")
var amountOfProduct = amountInFloat[1]
cy.log(amountOfProduct)
sum = Number(sum)  + Number(amountOfProduct)

}).then(function(){
cy.log(sum)
})
//validation for the sum of product 

cy.get("h3 strong").then(function(element)
{
var finalAmountCalculatedByWebSiteInString = element.text()
var finalAmountCalculatedByWebSiteArray=finalAmountCalculatedByWebSiteInString.split(" ")
var finalAmountCalculatedByWebSiteInValue =finalAmountCalculatedByWebSiteArray[1]
expect(Number(finalAmountCalculatedByWebSiteInValue)).to.equal(Number(sum))


})
checkoutpage.getCheckOutButton().click() 
checkoutpage.getCountryBox().type("India")
checkoutpage.getCheckBoxToAgreeWithTermConditions().check({force: true})
checkoutpage.getPurchaseButton().click()
checkoutpage.getSuccessText().contains("Success")

});
})