import { render } from '@testing-library/react';

import SkillsComponent from './skills-component';

describe('SkillsComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SkillsComponent />);
    expect(baseElement).toBeTruthy();
  });
});
