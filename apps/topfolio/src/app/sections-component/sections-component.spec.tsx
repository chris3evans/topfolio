import { render } from '@testing-library/react';
import { expect, describe, it } from '@jest/globals';

import SectionsComponent from './sections-component';
const mockFn = jest.fn();
const intersectionObserverMock = () => ({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);
describe('SectionsComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SectionsComponent />);
    expect(baseElement).toBeTruthy();
  });
});
