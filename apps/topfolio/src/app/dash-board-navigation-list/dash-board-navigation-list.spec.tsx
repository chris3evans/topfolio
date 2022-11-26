import { render } from '@testing-library/react';

import DashBoardNavigationList from './dash-board-navigation-list';

describe('DashBoardNavigationList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashBoardNavigationList />);
    expect(baseElement).toBeTruthy();
  });
});
