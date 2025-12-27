describe('Login Flow (Legacy)', () => {
  it('logs in successfully', () => {
    cy.visit('/login');

    cy.get('#email').type('user@test.com');
    cy.get('#password').type('Password123!');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/dashboard');
  });
});
