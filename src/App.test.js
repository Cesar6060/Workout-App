import React from 'react';
import { render as rtlRender, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { AuthContextProvider } from './contexts/authContext';

function render(component) {
  return rtlRender(
    <Router>
      <AuthContextProvider>{component}</AuthContextProvider>
    </Router>
  );
}

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
    const linkElement = screen.getByText(/welcome to my workout app/i);
    expect(linkElement).toBeInTheDocument();
  });
});
