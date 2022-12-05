import { render } from '@testing-library/react';

import SkillsSLider from './skills-slider';

describe('SkillsSLider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SkillsSLider />);
    expect(baseElement).toBeTruthy();
  });
});
