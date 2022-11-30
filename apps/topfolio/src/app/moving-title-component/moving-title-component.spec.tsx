import { render } from '@testing-library/react';

import MovingTitleComponent from './moving-title-component';

describe('MovingTitleComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MovingTitleComponent />);
    expect(baseElement).toBeTruthy();
  });
});
