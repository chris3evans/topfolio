import { render } from '@testing-library/react';

import FormProjects from './form-projects';

describe('FormProjects', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormProjects />);
    expect(baseElement).toBeTruthy();
  });
});
