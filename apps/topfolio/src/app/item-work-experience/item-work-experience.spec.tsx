import { render } from '@testing-library/react';

import ItemWorkExperience from './item-work-experience';

describe('ItemWorkExperience', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ItemWorkExperience />);
    expect(baseElement).toBeTruthy();
  });
});
