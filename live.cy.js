describe('day 6', async() => {
    it('static dropdown', async  () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false; // Mengabaikan error khusus untuk tes ini
        });
        cy.visit('https://demo.automationtesting.in/Register.html')
        cy.xpath(`//select[@id='Skills']`).select(5);

        
    })
})