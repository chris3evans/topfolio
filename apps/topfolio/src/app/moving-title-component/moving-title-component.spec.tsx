import { render } from '@testing-library/react';
import { expect, describe, it } from '@jest/globals';

import MovingTitleComponent from './moving-title-component';
const intersectionObserverMock = () => ({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);

describe('MovingTitleComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MovingTitleComponent text={'Hello World'} alignCenter={false} />
    );
    expect(baseElement).toBeTruthy();
  });
});
