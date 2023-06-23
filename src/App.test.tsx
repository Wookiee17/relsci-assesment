import { render, screen } from '@testing-library/react';
import App from './App';

test('renders calender component', () => {
  render(<App />);
  const element = screen.getByTestId("calender-container");
  expect(element).toBeInTheDocument();
});
