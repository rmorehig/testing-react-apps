// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../../components/counter'

beforeEach(() => {
  document.body.innerHTML = ''
})

test('counter increments and decrements when the buttons are clicked', () => {
  const div = document.createElement('div')
  document.body.append(div)
  ReactDOM.render(<Counter />, div)
  const [decrement, increment] = div.querySelectorAll('button')
  const event = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0,
  })
  const message = div.firstElementChild.querySelector('div')
  expect(message.textContent).toBe('Current count: 0')
  increment.dispatchEvent(event)
  expect(message.textContent).toBe('Current count: 1')
  decrement.dispatchEvent(event)
  expect(message.textContent).toBe('Current count: 0')
})

/* eslint no-unused-vars:0 */
