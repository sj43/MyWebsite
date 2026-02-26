import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './header';
import resumeData from '../resume/resumeData';

const mockIntersectionObserver = vi.fn().mockReturnValue({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
});
window.IntersectionObserver = mockIntersectionObserver;

const mockToggleTheme = vi.fn();

describe('Header', () => {
  test('renders the name from resumeData', () => {
    render(<Header resumeData={resumeData} theme="dark" toggleTheme={mockToggleTheme} />);
    expect(screen.getByText(resumeData.name)).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(<Header resumeData={resumeData} theme="dark" toggleTheme={mockToggleTheme} />);
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Experience/i)).toBeInTheDocument();
  });

  test('renders theme toggle button', () => {
    render(<Header resumeData={resumeData} theme="dark" toggleTheme={mockToggleTheme} />);
    expect(screen.getByRole('button', { name: /toggle theme/i })).toBeInTheDocument();
  });

  test('renders social links', () => {
    render(<Header resumeData={resumeData} theme="dark" toggleTheme={mockToggleTheme} />);
    expect(screen.getByLabelText(/LinkedIn/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/GitHub/i)).toBeInTheDocument();
  });
});
