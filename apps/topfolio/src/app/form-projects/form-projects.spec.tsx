import { render, fireEvent } from '@testing-library/react';
import { expect, describe, it } from '@jest/globals';
import { mockUserState } from '../mockUser';
import { screen } from '@testing-library/react';
import FormProjects from './form-projects';
import { UserContext } from '../../utils/UserContext';
import '@testing-library/jest-dom';

const userDetails = mockUserState;
const setUser = () => { };

describe('FormProjects', () => {
  type TestElement = Document | Element | Window | Node;
  function hasInputValue(e: TestElement, inputValue: string) {
    return screen.getByDisplayValue(inputValue) === e;
  }
  it('should render successfully', async () => {
    const { baseElement } = render(<FormProjects token={'testToken'} listener={function a() { }} existingData={mockUserState.portfolio.projects[0]} />);
    expect(baseElement).toBeTruthy();
  });

  it('should update inputs on type', async () => {
    const { baseElement } = render(
      <FormProjects token={'testToken'} listener={function listener(a: string) { console.log(a) }} existingData={mockUserState.portfolio.projects[0]} />
    );
    const input = baseElement.querySelector('#projectname') as HTMLInputElement;
    const input2 = baseElement.querySelector('#description') as HTMLInputElement;
    const input3 = baseElement.querySelector('#giturl') as HTMLInputElement;
    const input4 = baseElement.querySelector('#appurl') as HTMLInputElement;
    expect(input).toBeTruthy();
    expect(input2).toBeTruthy();
    expect(input3).toBeTruthy();
    expect(input4).toBeTruthy();
    console.log(input3, "input3!!!!!!!!!!!!!!!!!!!!")
    console.log(input4, "input4!!!!!!!!!!!!!!!!!!!!")
    fireEvent.input(input, { target: { defaultValue: 'test name' } });
    fireEvent.input(input2, { target: { defaultValue: 'test description' } });
    fireEvent.input(input3, { target: { defaultValue: 'test git_url' } });
    fireEvent.input(input4, { target: { defaultValue: 'app_url' } });
    expect(input.defaultValue).toBe('test name')
    expect(input2.defaultValue).toBe('test description')
    expect(input3.defaultValue).toBe('test git_url')
    expect(input4.defaultValue).toBe('app_url')

  });
});
