describe('template spec', () => {
  const playground = "Test_Playground"
  it('passes', () => {
    cy.visit('https://selector-practice-itak.vercel.app/')
    cy.contains(playground)
    cy.contains('Home').click()
    cy.contains(playground).click()
  })
})

