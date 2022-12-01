import { render } from '@testing-library/react';

import ListWorkExperience from './list-work-experience';

describe('ListWorkExperience', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ListWorkExperience />);
    expect(baseElement).toBeTruthy();
  });
});
