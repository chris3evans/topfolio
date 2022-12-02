import { render } from '@testing-library/react';
import { App } from './app';
import { expect, describe, it } from '@jest/globals';
const intersectionObserverMock = () => ({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);
// fixed Auth0 bug
const JSDOM = require('jsdom').JSDOM;

Object.defineProperty(global.self, 'crypto', {
  value: {
    getRandomValues: (arr) => crypto.randomBytes(arr.length),
  },
});
global.crypto.subtle = {};
describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });
});
