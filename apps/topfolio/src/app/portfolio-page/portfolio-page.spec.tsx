import { render } from '@testing-library/react';

import PortfolioPage from './portfolio-page';

describe('PortfolioPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PortfolioPage />);
    expect(baseElement).toBeTruthy();
  });
});
