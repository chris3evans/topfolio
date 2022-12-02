import { render } from '@testing-library/react';
import { expect, describe, it, jest } from '@jest/globals';
import DashBoardPage from './dash-board-page';
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

describe('DashBoardPage', () => {
  it('should render successfully', () => {
    const history = createMemoryHistory();
    const route = '/:slug-portfolio';
    history.push(route);
    const { baseElement } = render(
      <Router history={history}>
        <DashBoardPage />{' '}
      </Router>
    );
    expect(baseElement).toBeTruthy();
  });
});
