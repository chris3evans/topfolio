import { render } from '@testing-library/react';
import { expect, describe, it, jest } from '@jest/globals';
import { PortfolioPage } from './portfolio-page';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
const intersectionObserverMock = () => ({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);

describe('PortfolioPage', () => {
  it('should render successfully', () => {
    const history = createMemoryHistory();
    const route = '/:slug-portfolio';
    history.push(route);
    const { baseElement } = render(
      <Router history={history}>
        <PortfolioPage viewMode={false} />{' '}
      </Router>
    );
    expect(baseElement).toBeTruthy();
  });
});
