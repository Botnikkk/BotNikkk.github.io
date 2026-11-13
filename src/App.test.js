import { render, screen } from '@testing-library/react';
import App from './App';

beforeAll(() => {
  // jsdom doesnt have these two so just fake them
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
  // email should only show up once on the whole page (contact section)
  expect(screen.getAllByText('b.nikk.chd@gmail.com')).toHaveLength(1);
});
