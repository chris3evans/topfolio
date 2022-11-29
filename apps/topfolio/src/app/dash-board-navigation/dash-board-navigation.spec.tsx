import { render } from '@testing-library/react';

import DashBoardNavigation from './dash-board-navigation';

describe('DashBoardNavigation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashBoardNavigation />);
    expect(baseElement).toBeTruthy();
  });
});
