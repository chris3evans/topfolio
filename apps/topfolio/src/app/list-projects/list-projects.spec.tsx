import { render } from '@testing-library/react';
import { expect, describe, it } from '@jest/globals';
import { screen } from '@testing-library/react';
import ListProjects from './list-projects';
import { mockUserState } from '../mockUser'
import { UserContext } from '../../utils/UserContext';

const userDetails = mockUserState;
const setUser = () => { };


describe('ListProjects', () => {
  it('should render successfully when context is empty', () => {
    const { baseElement } = render(<ListProjects token={'testToken'} />);
    expect(baseElement).toBeTruthy();
  });

  it('should render a FormProjects component when context is empty', async () => {
    const { baseElement } = render(<ListProjects token={'testToken'} />);
    const aFormProjectsLabel = await screen.findAllByTestId('projectNameLabel')
    expect(aFormProjectsLabel).toBeTruthy();
  });

  it('should render successfully with context provided userDetails', async () => {
    const { baseElement } = render(
      <UserContext.Provider value={{ userDetails, setUser }}>
        <ListProjects token={'testToken'} />
      </UserContext.Provider>
    );
    const aFormProjectsLabel = await screen.findAllByTestId('projectNameLabel')
    expect(baseElement).toBeTruthy();
  })
});
