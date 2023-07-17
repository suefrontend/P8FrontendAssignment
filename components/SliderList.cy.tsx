import React from 'react'
import SliderList from './SliderList'

describe('<SliderList />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SliderList />)
  })
})