import { render } from '@testing-library/react';

import ListProjects from './list-projects';

describe('ListProjects', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ListProjects />);
    expect(baseElement).toBeTruthy();
  });
});
