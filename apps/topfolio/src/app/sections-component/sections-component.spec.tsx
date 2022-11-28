import { render } from '@testing-library/react';

import SectionsComponent from './sections-component';

describe('SectionsComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SectionsComponent />);
    expect(baseElement).toBeTruthy();
  });
});
