import { render } from '@testing-library/react';
import { expect, describe, it } from '@jest/globals';
import ContactMeDialog from './contact-me-dialog';
const mockFn = () => {};
const intersectionObserverMock = () => ({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);
describe('ContactMeDialog', () => {
  it('should render successfully when open prop is true', () => {
    const { baseElement } = render(
      <ContactMeDialog open={true} onClose={mockFn} />
    );
    const children = baseElement.childNodes.length;
    const form = baseElement.getElementsByTagName('form');
    expect(form.length).toBeTruthy();
    expect(children).toBe(2);
    expect(baseElement).toBeTruthy();
  });
  it('should not popup when open prop is false', () => {
    const { baseElement } = render(
      <ContactMeDialog open={false} onClose={mockFn} />
    );
    const children = baseElement.childNodes.length;
    const form = baseElement.getElementsByTagName('form');
    expect(form.length).toBeFalsy();
    expect(children).toBe(1);
    expect(baseElement).toBeTruthy();
  });
  it('should update inputs on type', () => {
    setup();
  });
});
