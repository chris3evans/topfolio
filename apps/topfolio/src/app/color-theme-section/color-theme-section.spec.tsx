import { render } from '@testing-library/react';

import ColorThemeSection from './color-theme-section';

describe('ColorThemeSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ColorThemeSection />);
    expect(baseElement).toBeTruthy();
  });
});
