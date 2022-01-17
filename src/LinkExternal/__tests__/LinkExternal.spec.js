import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import * as React from 'react';
import LinkExternal from '../LinkExternal';

expect.extend(toHaveNoViolations);

const testUrl = 'https://google.com';
const testClass = 'test-class';

describe('LinkExternal', () => {
  it('should render', () => {
    render(<LinkExternal href={testUrl}>Test Link</LinkExternal>);
    const linkElement = screen.getByText('Test Link');
    expect(linkElement).toBeInTheDocument();
  });

  it('should have correct attributes', () => {
    render(<LinkExternal href={testUrl}>Test Link</LinkExternal>);
    const linkElement = screen.getByText('Test Link');
    expect(linkElement).toHaveAttribute('href', testUrl);
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noreferrer');
  });

  it('should pass props', () => {
    render(
      <LinkExternal href={testUrl} className={testClass}>
        Test Link
      </LinkExternal>
    );
    const linkElement = screen.getByText('Test Link');
    expect(linkElement).toHaveClass(testClass);
  });

  it('should not have accessibility issues', async () => {
    const { container } = render(
      <LinkExternal href={testUrl}>Test Link</LinkExternal>
    );
    const results = await axe(container, {
      tags: ['wcag2a', 'wcag2aa'],
    });
    expect(results).toHaveNoViolations();
  });

  it('should be able to pass html children', async () => {
    render(
      <LinkExternal href={testUrl} className={testClass}>
        Test Link <i data-testid="icon" className="icon" />
      </LinkExternal>
    );
    const iconElement = screen.getByTestId('icon');
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveClass('icon');
  });
});
