import {cleanup, render, screen} from '@testing-library/react'
import App from './App'
import '@testing-library/jest-dom/vitest';

test('renders application', () => {
	// given
	cleanup()

	// when
	render(<App/>)

	// then
  const now = new Date()
  const copyright = screen.getByText(/© Acromere/i)
  expect(copyright).toBeInTheDocument()
  expect(copyright).toHaveTextContent('© Acromere ' + now.getFullYear())

	const catchphrase = screen.getByText(/Video for your music/i)
	expect(catchphrase).toBeInTheDocument()
	expect(catchphrase).toHaveTextContent('Video for your music')
})

