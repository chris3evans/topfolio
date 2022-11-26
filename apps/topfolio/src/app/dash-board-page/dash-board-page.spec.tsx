import { render } from '@testing-library/react';

import DashBoardPage from './dash-board-page';

describe('DashBoardPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashBoardPage />);
    expect(baseElement).toBeTruthy();
  });
});
