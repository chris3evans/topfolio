import { render } from '@testing-library/react';

import FormLayout from './form-layout';

describe('FormLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormLayout />);
    expect(baseElement).toBeTruthy();
  });
});
