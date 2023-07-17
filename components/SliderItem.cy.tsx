import React from 'react'
import SliderItem from './SliderItem'

describe('<SliderItem />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SliderItem />)
  })
})