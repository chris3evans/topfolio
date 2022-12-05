import { render } from '@testing-library/react';

import SkillsSphere from './skills-sphere';

describe('SkillsSphere', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SkillsSphere />);
    expect(baseElement).toBeTruthy();
  });
});
