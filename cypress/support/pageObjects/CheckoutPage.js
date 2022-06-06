
class CheckoutPage
{
getCheckOutButton()
    {
        
        return cy.get("button.btn.btn-success")
    }

getCountryBox()
{
    return cy.get("#country")
}


getCheckBoxToAgreeWithTermConditions()
{
    return cy.get("#checkbox2")
}

getPurchaseButton()
{
    return cy.get("input.btn.btn-success.btn-lg")
}

getSuccessText()
{
    return cy.get("div.alert.alert-success.alert-dismissible")
}
}
export default CheckoutPage