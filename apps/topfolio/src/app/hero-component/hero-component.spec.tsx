import { render } from '@testing-library/react';
import { expect, describe, it } from '@jest/globals';

import HeroComponent from './hero-component';
const mockFn = jest.fn();
const intersectionObserverMock = () => ({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);
describe('HeroComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroComponent />);
    expect(baseElement).toBeTruthy();
  });
});
