import {  render, fireEvent } from '@testing-library/react';
import SkillForm from './skill-form';
import { expect, describe, it } from '@jest/globals';

describe('CustomText', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SkillForm token={""}/>);
    expect(baseElement).toBeTruthy();
  });

    it('inputs should render successfully',  () => {
    const { baseElement } = render(<SkillForm token={''} />);

    const level =  baseElement.querySelector('#level') as HTMLInputElement;
     fireEvent.input(level, { target: { defaultValue: '80' } });

    const skill =  baseElement.querySelector('#skill') as HTMLInputElement;
     fireEvent.input(skill, { target: { defaultValue: 'test' } });

    expect(level.defaultValue).toEqual('80');
    expect(skill.defaultValue).toEqual('test');
    });
  
  
});
