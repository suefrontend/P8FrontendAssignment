import React from 'react'
import RadioList from './RadioList'

describe('<RadioList />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<RadioList />)
  })
})