import { render } from '@testing-library/react';

import ProjectsComponent from './projects-component';

describe('ProjectsComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProjectsComponent />);
    expect(baseElement).toBeTruthy();
  });
});
