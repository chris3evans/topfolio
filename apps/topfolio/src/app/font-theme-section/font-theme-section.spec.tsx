import { render } from '@testing-library/react';

import FontThemeSection from './font-theme-section';

describe('FontThemeSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FontThemeSection />);
    expect(baseElement).toBeTruthy();
  });
});
