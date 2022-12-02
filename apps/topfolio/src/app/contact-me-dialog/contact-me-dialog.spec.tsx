import { render } from '@testing-library/react';
import { expect, describe, it } from '@jest/globals';
import ContactMeDialog from './contact-me-dialog';
import { fireEvent, screen, waitFor } from '@testing-library/react';
type TestElement = Document | Element | Window | Node;
function hasInputValue(e: TestElement, inputValue: string) {
  return screen.getByDisplayValue(inputValue) === e;
}
const mockFn = jest.fn();
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
  it('should update inputs on type', async () => {
    const { baseElement } = render(
      <ContactMeDialog open={true} onClose={mockFn} />
    );
    const input = await screen.findByRole('textbox', { name: /name/i });
    const input2 = await screen.findByRole('textbox', { name: /email/i });
    const input3 = await screen.findByRole('textbox', { name: /subject/i });
    const input4 = await screen.findByRole('textbox', { name: /message/i });
    expect(input).toBeTruthy();
    expect(input2).toBeTruthy();
    expect(input3).toBeTruthy();
    expect(input4).toBeTruthy();
    fireEvent.change(input, { target: { value: 'Marco Lupo' } });
    fireEvent.change(input2, { target: { value: 'fake@email.cpm' } });
    fireEvent.change(input3, { target: { value: 'Subject' } });
    fireEvent.change(input4, { target: { value: 'aaaaa' } });
    expect(hasInputValue(input, 'Marco Lupo')).toBeTruthy();
    expect(hasInputValue(input2, 'fake@email.cpm')).toBeTruthy();
    expect(hasInputValue(input3, 'Subject')).toBeTruthy();
    expect(hasInputValue(input4, 'aaaaa')).toBeTruthy();
  });
  it('should close form on click of close button', async () => {
    const { baseElement } = render(
      <ContactMeDialog open={true} onClose={mockFn} />
    );
    const button = await screen.findByTestId('close-button');
    expect(button).toBeTruthy();
    fireEvent.click(button);
    expect(mockFn).toHaveBeenCalled();
  });
  it('should submit form on click of submit button', async () => {
    const { baseElement } = render(
      <ContactMeDialog open={true} onClose={mockFn} />
    );
    const input = await screen.findByRole('textbox', { name: /name/i });
    const input2 = await screen.findByRole('textbox', { name: /email/i });
    const input3 = await screen.findByRole('textbox', { name: /subject/i });
    const input4 = await screen.findByRole('textbox', { name: /message/i });
    const button = await screen.findByTestId('submit-button');
    expect(button).toBeTruthy();
    fireEvent.change(input, { target: { value: 'Marco Lupo' } });
    fireEvent.change(input2, { target: { value: 'fake@email.cpm' } });
    fireEvent.change(input3, { target: { value: 'Subject' } });
    fireEvent.change(input4, { target: { value: 'aaaaa' } });
    fireEvent.click(button);
    expect(mockFn).toHaveBeenCalled();
  });
});
