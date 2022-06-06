class HomePage
{


    getNameBox(){return cy.get(':nth-child(1) > .form-control')}
    getEmailBox()
    {
        return cy.get(':nth-child(2) > .form-control')
    }
    getPasswordBox()
    {
        return  cy.get("#exampleInputPassword1")
    }
    getGenderDD()
    {
        return cy.get("select")
    }

    getCheckBoxes()
    {
        return cy.get("#inlineRadio2")
    }
    getTwoWayBindingDataBox()
    {
        return cy.get(".ng-pristine")
    }
    getEnterpreneurCheckBox()
    {
        return cy.get('#inlineRadio3')
    }
    getShopLink()
    {
        return cy.get(':nth-child(2) > .nav-link')
    }


}
export default HomePage