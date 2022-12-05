import { render } from '@testing-library/react';

import ItemProjectsBlank from './item-projects-blank';

describe('ItemProjectsBlank', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ItemProjectsBlank />);
    expect(baseElement).toBeTruthy();
  });
});
