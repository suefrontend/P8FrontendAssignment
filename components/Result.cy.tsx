import React from 'react'
import Result from './Result'

describe('<Result />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Result />)
  })
})