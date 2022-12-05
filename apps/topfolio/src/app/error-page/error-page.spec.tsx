import { render } from '@testing-library/react';
import { expect, describe, it } from '@jest/globals';
import ErrorPage from './error-page';

describe('ErrorPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ErrorPage />);
    expect(baseElement).toBeTruthy();
  });
});
