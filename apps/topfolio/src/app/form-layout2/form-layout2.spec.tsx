import { render } from '@testing-library/react';

import FormLayout2 from './form-layout2';

describe('FormLayout2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormLayout2 />);
    expect(baseElement).toBeTruthy();
  });
});
