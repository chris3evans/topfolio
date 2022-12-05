import { render } from '@testing-library/react';

import CurrentFontTheme from './current-font-theme';

describe('CurrentFontTheme', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CurrentFontTheme />);
    expect(baseElement).toBeTruthy();
  });
});
