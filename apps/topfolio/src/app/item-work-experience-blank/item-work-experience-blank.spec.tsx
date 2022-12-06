import { render } from '@testing-library/react';

import ItemWorkExperienceBlank from './item-work-experience-blank';

describe('ItemWorkExperienceBlank', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ItemWorkExperienceBlank />);
    expect(baseElement).toBeTruthy();
  });
});
