import React from 'react'
import RadioItem from './RadioItem'

describe('<RadioItem />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<RadioItem />)
  })
})