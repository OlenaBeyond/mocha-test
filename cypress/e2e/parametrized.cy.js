describe('Multiple tests', () => {
    const testGoogle = (testData, expectedResult) =>

    function () {
      cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
      cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
      cy.get('[title="Forms"]').click();
      cy.get('[title="Form Inputs"]').click();
      cy.get('[title="Forms"]').click();
      cy.get('[title="Form Layouts"]').click();
      cy.get('div.wM6W7d').should("contain", `${expectedResult}`)
    };

  it('search for CYPRESS', testGoogle('CYPRESS', 'cypress'));
  it('search for AUDI', testGoogle('AUDI', 'audi'));
  it('search for BMW', testGoogle('BMW', 'bmw'));
})