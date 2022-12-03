import { render } from '@testing-library/react';

import ColorCardItem from './color-card-item';

describe('ColorCardItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ColorCardItem />);
    expect(baseElement).toBeTruthy();
  });
});
