import React from 'react'
import Calculator from './Calculator'

describe('<Calculator />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Calculator />)
  })
})