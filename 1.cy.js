describe('UI automation cypress', async function () {
    it('login', async function () {
      await cy.visit('https://opensource-demo.orangehrmlive.com/')
       await cy.get(`cy.get("[name='username']`)
    //    await cy.get(`cy.get("[name='password']`)
    cy.xpath("//input[@name='password']")
        
    });
    
});