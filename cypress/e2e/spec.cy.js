import { testing_start } from './testing_start.cy.js';

/*
This is a good place to start
 https://docs-vercel.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test#Step-1-Visit-a-page
 as well as https://www.cypress.io/blog/understanding-selectors-in-testing 
*/

describe('template spec', () => {
  it('handles dynamic count', () => {
    testing_start();

    let count = 0; // Start with 0

    // This is a function that increments the click counter until it is 2
    // Once it is 2, click "Reset to zero"

    function clickButtonUntil(targetCount) {
      cy.contains('button', `Add one, current count is ${count}`)
        .click()
        .then(() => {
          count++; // Increment the count
          if (count < targetCount) {
            clickButtonUntil(targetCount); // Recursively click until the target is reached
          } else {
            cy.contains('button', 'Reset to zero').click()
          }
        });
    }
    

    clickButtonUntil(2); // Stop when count reaches 2
    // DO NOT BE DECEIVED! The dropdown button is not actually the element you need to click
    cy.contains('button.dropbtn', 'Dropdown with three options').click();
    cy.wait(50); 
    cy.get('.dropdown-content') // Select the dropdown content div
  .contains('a', 'Moodeng').should('have.attr', 'href','https://www.vice.com/en/article/moo-deng-baby-hippo-meme/'
   )

   cy.get('.dropdown-content').contains('a', 'Pesto', 'href', 'https://www.youtube.com/watch?v=23TbvrBHKMM')
  /*
  Be careful here! There are great shenanigans afoot if you try to access any of them
  Through the dropdown menu
  https://docs.cypress.io/app/guides/cross-origin-testing#Same-superdomain-per-test



  */
     

    // Select an anchor (`<a>`) element with the text "Moodeng" and click it
    // cy.contains('a', 'Moodeng').click();





    
  });
  


});