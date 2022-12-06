import { render } from '@testing-library/react';

import CreditsRing from './credits-ring';

describe('CreditsRing', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CreditsRing />);
    expect(baseElement).toBeTruthy();
  });
});
