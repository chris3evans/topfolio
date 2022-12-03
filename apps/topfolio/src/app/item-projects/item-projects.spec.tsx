import { render } from '@testing-library/react';

import ItemProjects from './item-projects';

describe('ItemProjects', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ItemProjects />);
    expect(baseElement).toBeTruthy();
  });
});
