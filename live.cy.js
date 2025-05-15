describe('day 6', async() => {
    it('static dropdown', async  () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false; // Mengabaikan error khusus untuk tes ini
        });
        // cy.visit('https://demo.automationtesting.in/Register.html')
        await cy.visit('https://demoqa.com/select-menu')
        await  cy.xpath(`//select[@id='oldSelectMenu']`).select(4);
        await  cy.xpath(`//select[@id='oldSelectMenu']`).select(0);

        
    })
})