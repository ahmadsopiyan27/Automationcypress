describe('day 6', async() => {
    it('static dropdown', async  () => {
        cy.visit('https://demo.automationtesting.in/Register.html')
        cy.xpath(`//select[@id='Skills']`);

        
    })
})