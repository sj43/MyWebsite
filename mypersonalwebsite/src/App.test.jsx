import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// Mock IntersectionObserver (not available in jsdom)
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
});
window.IntersectionObserver = mockIntersectionObserver;

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(() => 'dark'),
  setItem: vi.fn(),
  clear: vi.fn(),
};
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

const renderApp = () => render(<MemoryRouter><App /></MemoryRouter>);

describe('App', () => {
  test('renders without crashing', () => {
    renderApp();
  });

  test('renders About section', () => {
    renderApp();
    expect(screen.getAllByText(/About/i).length).toBeGreaterThan(0);
  });

  test('renders Resume/Work Experience section', () => {
    renderApp();
    // Use getAllByText to avoid throwing when multiple elements match
    const workMatches = screen.getAllByText(/Work/i);
    expect(workMatches.length).toBeGreaterThan(0);
  });

  test('renders navigation', () => {
    renderApp();
    expect(screen.getAllByText(/About/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Experience/i).length).toBeGreaterThan(0);
  });

  test('renders Skills section', () => {
    renderApp();
    expect(screen.getAllByText(/Skills/i).length).toBeGreaterThan(0);
  });

  test('renders Contact section', () => {
    renderApp();
    expect(screen.getAllByText(/Get In Touch/i).length).toBeGreaterThan(0);
  });
});
