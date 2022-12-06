import { render } from '@testing-library/react';

import AnimatedImage from './animated-image';
const mockFn = jest.fn();
const intersectionObserverMock = () => ({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);
describe('AnimatedImage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AnimatedImage imageUrl={''} alt={''} />);
    expect(baseElement).toBeTruthy();
  });
});
