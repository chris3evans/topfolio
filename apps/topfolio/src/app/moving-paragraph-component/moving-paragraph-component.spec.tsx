import { render } from '@testing-library/react';
import { expect, describe, it } from '@jest/globals';

import MovingParagraphComponent from './moving-paragraph-component';
const intersectionObserverMock = () => ({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);

describe('MovingParagraphComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MovingParagraphComponent text={'Hello World'} />
    );
    expect(baseElement).toBeTruthy();
  });
});
