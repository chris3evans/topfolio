import { render } from '@testing-library/react';
import SkillForm from './skill-form';
import { expect, describe, it } from '@jest/globals';

describe('CustomText', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SkillForm token={""}/>);
    expect(baseElement).toBeTruthy();
  });
});
