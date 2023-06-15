describe('Funcionalidades de contato', () => {
    beforeEach(() => {
      cy.visit('https://agenda-contatos-react.vercel.app/')
    })
  
    it('Deve adicionar um novo contato', () => {
      cy.get('#botao-adicionar-contato').click()
      cy.get('#campo-nome').type('João')
      cy.get('#campo-email').type('joao@example.com')
      cy.get('#botao-salvar').click()
      cy.get('.lista-contatos').should('contain', 'João')
    })
  
    it('Deve alterar um contato existente', () => {
      cy.get('.lista-contatos').contains('João').click()
      cy.get('#campo-nome').clear().type('João da Silva')
      cy.get('#botao-salvar').click()
      cy.get('.lista-contatos').should('contain', 'João da Silva')
    })
  
    it('Deve remover um contato existente', () => {
      cy.get('.lista-contatos').contains('João da Silva').click()
      cy.get('#botao-remover').click()
      cy.get('.lista-contatos').should('not.contain', 'João da Silva')
    })
  })
  