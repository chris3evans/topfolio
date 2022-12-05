import { render } from '@testing-library/react';

import FormFontTheme from './form-font-theme';

describe('FormFontTheme', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormFontTheme />);
    expect(baseElement).toBeTruthy();
  });
});
