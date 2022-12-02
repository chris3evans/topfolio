import { render } from '@testing-library/react';
import { expect, describe, it } from '@jest/globals';

import ProjectsComponent from './projects-component';
const mockFn = jest.fn();
const intersectionObserverMock = () => ({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);

describe('ProjectsComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProjectsComponent />);
    expect(baseElement).toBeTruthy();
  });
});
