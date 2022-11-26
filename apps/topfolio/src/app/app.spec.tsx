import { cleanup, render } from '@testing-library/react';
import App from './app';

describe('App', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });
});
