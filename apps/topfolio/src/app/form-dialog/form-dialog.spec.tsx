import { render } from '@testing-library/react';

import FormDialog from './form-dialog';

describe('FormDialog', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormDialog />);
    expect(baseElement).toBeTruthy();
  });
});
