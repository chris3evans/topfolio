import { render } from '@testing-library/react';

import FormWorkExperience from './form-work-experience';

describe('FormWorkExperience', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormWorkExperience />);
    expect(baseElement).toBeTruthy();
  });
});
