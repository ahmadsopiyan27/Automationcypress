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
  it.skip('dyanmic looping', async  () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false; // Mengabaikan error khusus untuk tes ini
        });
    await cy.visit('https://demo.automationtesting.in/Register.html');
    await cy.wait(3000);
    await cy.get('#Skills').select('C')
    
  });
  it.skip('autosuggestive dropdown', async function () {
     cy.on('uncaught:exception', (err, runnable) => {
            return false; // Mengabaikan error khusus untuk tes ini
        });

    let fieldSuggestive = `//span[@class='select2-selection select2-selection--single']`;
    let fieldSearch = `//input[@class='select2-search__field']`
    let fieldSearchItem = `//ul[@class='select2-results__options']/li`

    cy.visit('https://demo.automationtesting.in/Register.html');
    await cy.xpath(fieldSuggestive).click();
    await cy.xpath(fieldSearch).type('de');
    await cy.xpath(fieldSearchItem).contains('Bangladesh').click();

    
  });
  it.skip('checkbox', async function () {
     cy.on('uncaught:exception', (err, runnable) => {
            return false; // Mengabaikan error khusus untuk tes ini
        });

    let checkbox =`//input[@type='checkbox']`;
     await cy.visit('https://demo.automationtesting.in/Register.html');
     await cy.xpath(checkbox).first().check().should('be.checked');  
     await cy.xpath(checkbox).last().check().should('be.checked');
     await cy.xpath(checkbox).check('Movies').should('be.checked');
      await cy.xpath(checkbox).eq(2).uncheck().should('be.checked');     
    
  });
  it.skip('calender', async function () {
    cy.visit('https://jqueryui.com/datepicker/');

    // langsung type
    // cy.get('.demo-frame').its('0.contentDocument.body').then(cy.wrap)
    // .xpath(`//input[@id='datepicker']`).type('05/05/2025');
    // // .xpath(`//input[@id='datepicker']`).click();

    // untuk interact sama calender
cy.get('.demo-frame').its('0.contentDocument.body').then(cy.wrap)
    .xpath(`//input[@id='datepicker']`).click();

     cy.get('.demo-frame').its('0.contentDocument.body').then(cy.wrap)
    .xpath(`//a[@class='ui-datepicker-prev ui-corner-all']`).click();

     cy.get('.demo-frame').its('0.contentDocument.body').then(cy.wrap)
    .xpath(`//a[@class='ui-state-default' and text()='12']`).click();


    
  });

  it('calender 2', async function name() {
    await cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await cy.xpath(`//input[@name='username']`).type('Admin');
    await cy.xpath(`//input[@name='password']`).type('admin123');
    await cy.xpath(`//button[@type='submit']`).click();

    
  })
});
