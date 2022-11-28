import { render } from '@testing-library/react';

import BioComponent from './bio-component';

describe('BioComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BioComponent />);
    expect(baseElement).toBeTruthy();
  });
});
