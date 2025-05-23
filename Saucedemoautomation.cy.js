describe('Visit SauceDemo', () => {
    it('opens the SauceDemo website', () => {
      cy.visit('https://saucelabs.com/sign-up');
      cy.get('#signUpWithEmail').click()
      cy.get('#email').type('duck-atmosphere123456@lxigql3b.mailosaur.net')
      cy.get('#username').type('QAtestmember')
      cy.get('#password').type('Password@123')
      cy.get('#subscription').click()
      cy.wait(5000)
      cy.get('.Button_large__Z2ozi').click()
       cy.wait(5000)
      cy.get('h1').should('be.visible').contains('Verify your email to continue using Sauce.')
      cy.get('.EmailVerificationContainer__resend-container__L9qsT').contains('If you don’t see it, check your spam folder for an email from noreply@saucelabs.com or resend the email')
    });
    it('opens the SauceDemo website', () => {
      cy.visit('https://mailosaur.com/app');
     /* cy.get('#email').type('iyappan@qaoncloud.com')
      cy.get('._primary_1v5n3_47').click()
      cy.get('#password').type('Iyappa@2710')
      cy.wait(4000)
      cy.get('._primary_1v5n3_47').click()
      cy.wait(3000)*/
      cy.get('.mt-2 > ._btn_1v5n3_5').click()
      cy.get('[data-testid="message-0196fc15-e071-43a2-8e53-54d085956b28"] > :nth-child(2)').click()
         cy.get('.ctaButton a')
        .invoke('removeAttr', 'target')
        .click();
        cy.pause(); 
  
       });
  });