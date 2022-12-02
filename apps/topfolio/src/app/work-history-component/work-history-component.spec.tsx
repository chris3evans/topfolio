import { render } from '@testing-library/react';
import { expect, describe, it } from '@jest/globals';

import WorkHistoryComponent from './work-history-component';
const mockFn = jest.fn();
const intersectionObserverMock = () => ({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);
describe('WorkHistoryComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WorkHistoryComponent />);
    expect(baseElement).toBeTruthy();
  });
});
