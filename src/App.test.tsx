import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const inputText = screen.getByText(/Input JSON/i);
  expect(inputText).toBeInTheDocument();

  const outputText = screen.getByText(/Output/i);
  expect(outputText).toBeInTheDocument();
});
