import { render, screen } from '@testing-library/react';
import App from './App';

beforeAll(() => {
  // jsdom has no IntersectionObserver / matchMedia
  window.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
  window.matchMedia = window.matchMedia || (() => ({ matches: true, addListener() {}, removeListener() {} }));
});

test('renders name, section headings and a single contact section', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /nikhil chaudhary/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 2, name: /^about$/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 2, name: /^skills$/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 2, name: /^projects$/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 2, name: /get in touch/i })).toBeInTheDocument();
  // The email address is shown once, in the contact section.
  expect(screen.getAllByText('b.nikk.chd@gmail.com')).toHaveLength(1);
});
