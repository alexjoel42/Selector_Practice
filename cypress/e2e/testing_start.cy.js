export function testing_start() {
  const playground = "Test_Playground";
  cy.visit('https://selector-practice-itak.vercel.app/');
  cy.contains(playground);
  cy.contains('Home').click();
  cy.contains(playground).click();
}

// Here is how to use a function! You can save these commands somewhere 
// This way you don't repeat using the same command
// The more places you use code, the more places you need to refactor if something breaks
