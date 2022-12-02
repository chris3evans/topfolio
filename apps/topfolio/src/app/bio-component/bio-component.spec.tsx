import { render } from '@testing-library/react';
import { expect, describe, it } from '@jest/globals';

import BioComponent from './bio-component';
const mockFn = jest.fn();
const intersectionObserverMock = () => ({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);
describe('BioComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BioComponent />);
    expect(baseElement).toBeTruthy();
  });
});
