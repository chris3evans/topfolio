import { render } from '@testing-library/react';

import ContactMeForm from './contact-me-form';

describe('ContactMeForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContactMeForm />);
    expect(baseElement).toBeTruthy();
  });
});
