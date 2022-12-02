import { render } from '@testing-library/react';
import { expect, describe, it, jest } from '@jest/globals';
import { PortfolioPage } from './portfolio-page';

describe('PortfolioPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PortfolioPage viewMode={false} />);
    expect(baseElement).toBeTruthy();
  });
});
