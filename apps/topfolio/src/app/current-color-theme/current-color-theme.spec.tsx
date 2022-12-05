import { render } from '@testing-library/react';

import CurrentColorTheme from './current-color-theme';

describe('CurrentColorTheme', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CurrentColorTheme />);
    expect(baseElement).toBeTruthy();
  });
});
