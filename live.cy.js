const { expect } = require("chai");

 let optionArray = [];
describe('day 6', async() => {
    it.skip('static dropdown', async  () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false; // Mengabaikan error khusus untuk tes ini
        });
        // cy.visit('https://demo.automationtesting.in/Register.html')
        await cy.visit('https://demoqa.com/select-menu')
        await  cy.xpath(`//select[@id='oldSelectMenu']`).select(4);
        await  cy.xpath(`//select[@id='oldSelectMenu']`).select(0);
    });
     it.skip('static dropdown', async  () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false; // Mengabaikan error khusus untuk tes ini
        });
       
        let expectedSkills = [
            'APIs','C','C++'
        ]
        await cy.visit('https://demo.automationtesting.in/Register.html');
        await cy.get(`#Skills`).find('option').each(function(optionItem) {
            // cy.log(optionItem);
            const optionValue = optionItem.val();
            optionArray.push(optionValue);

        });
        cy.wrap(optionArray).should('include.members', expectedSkills);
        // await expect(optionArray).to.include(expectedSkills)
  });
  /////// this is update
  it('dyanmic looping', async  () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false; // Mengabaikan error khusus untuk tes ini
        });
    await cy.visit('https://demo.automationtesting.in/Register.html');
    await cy.wait(3000);
    await cy.get('#Skills').select('C')
    
  })
});
