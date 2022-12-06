import { render } from '@testing-library/react';

import ThemePage from './theme-page';

describe('ThemePage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ThemePage />);
    expect(baseElement).toBeTruthy();
  });
});
