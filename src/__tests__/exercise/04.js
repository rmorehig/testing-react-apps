// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {build, fake} from '@jackfranklin/test-data-bot'
import Login from '../../components/login'

const buildLoginForm = build({
  fields: {
    username: fake(f => f.internet.userName()),
    password: fake(f => f.internet.password()),
  },
})

test('submitting the form calls onSubmit with username and password', () => {
  const handleSubmit = jest.fn()
  render(<Login onSubmit={handleSubmit} />)
  const {password, username} = buildLoginForm()
  const usernameInput = screen.getByRole('textbox', {name: /username/i})
  const passwordInput = screen.getByLabelText(/password/i)
  userEvent.type(usernameInput, username)
  userEvent.type(passwordInput, password)

  const button = screen.getByRole('button', {name: /submit/i})
  userEvent.click(button)

  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith({
    username,
    password,
  })
})
