import { render, screen } from '@testing-library/react';

// 1. username input box is getting rendered
// 2. password input box is getting rendered
// 3. login button is getting rendered

import Login from "./Login"

test('renders login form', () => {
    render(<Login />)
    const usernameInput = screen.getByPlaceholderText('Enter username')
    const passwordInput = screen.getByPlaceholderText('Enter password')
    const loginButton = screen.getByRole('button')
    console.log(usernameInput)
    expect(usernameInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(loginButton).toBeInTheDocument()
})

test('input fields in the form should be empty', () => {
    render(<Login />)
    const usernameInput = screen.getByPlaceholderText('Enter username')
    const passwordInput = screen.getByPlaceholderText('Enter password')
    expect(usernameInput.value).toBe('')
    expect(passwordInput.value).toBe('')
})

test('button is disabled for empty inputs', () => {
    render(<Login />)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
})