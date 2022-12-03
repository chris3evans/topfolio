import { render } from '@testing-library/react';
import { expect, describe, it } from '@jest/globals';
import { screen } from '@testing-library/react';
import ItemProjects from './item-projects';
import { mockUserState } from '../mockUser'
describe('ItemProjects', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ItemProjects project={mockUserState.portfolio.projects[0]} listener={function a() { }} />);
    expect(baseElement).toBeTruthy();
  });

  it('should display data passed in', async () => {
    render(<ItemProjects project={mockUserState.portfolio.projects[0]} listener={function a() { }} />);
    const nameItem = await screen.findByTestId('projectName')
    const descriptionItem = await screen.findByTestId('projectDescription')
    const gitHubUrlItem = await screen.findByTestId('projectGithubUrl')
    const appUrlItem = await screen.findByTestId('projectAppUrl')
    expect(nameItem.textContent).toBe(mockUserState.portfolio.projects[0].name)
    expect(descriptionItem.textContent).toBe(mockUserState.portfolio.projects[0].description)
    expect(gitHubUrlItem.textContent).toBe(mockUserState.portfolio.projects[0].github_url)
    expect(appUrlItem.textContent).toBe(mockUserState.portfolio.projects[0].app_url)
  });
});
