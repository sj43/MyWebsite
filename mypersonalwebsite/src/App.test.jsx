import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// Mock IntersectionObserver (not available in jsdom)
const mockIntersectionObserver = vi.fn().mockImplementation(class {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
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

const renderApp = (initialEntries = ['/']) => render(
  <MemoryRouter initialEntries={initialEntries}>
    <App />
  </MemoryRouter>
);

describe('App', () => {
  test('renders without crashing', () => {
    renderApp();
  });

  test('renders main page sections', () => {
    renderApp();

    expect(screen.getByRole('heading', { name: 'Seung Hun Jang' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Driving agentic AI development/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Experience' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Featured Projects' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Achievements' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Education' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Get In Touch' })).toBeInTheDocument();
  });

  test('renders navigation', () => {
    renderApp();
    expect(screen.getByRole('navigation', { name: 'Page sections' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Experience' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Projects' })).toBeInTheDocument();
  });

  test('renders case study route', () => {
    renderApp(['/project/microsoft']);
    expect(screen.getByRole('heading', { name: /Microsoft.*Agentic AI/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Back to Projects/i })).toBeInTheDocument();
  });
});
