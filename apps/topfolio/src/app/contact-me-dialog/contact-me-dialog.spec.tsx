import { render } from '@testing-library/react';

import ContactMeDialog from './contact-me-dialog';

describe('ContactMeDialog', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContactMeDialog />);
    expect(baseElement).toBeTruthy();
  });
});
