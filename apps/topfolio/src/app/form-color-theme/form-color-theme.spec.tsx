import { render } from '@testing-library/react';

import FormColorTheme from './form-color-theme';

describe('FormColorTheme', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormColorTheme />);
    expect(baseElement).toBeTruthy();
  });
});
