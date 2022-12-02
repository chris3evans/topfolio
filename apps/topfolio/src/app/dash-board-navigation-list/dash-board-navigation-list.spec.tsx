import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import DashBoardNavigationList from './dash-board-navigation-list';
import { expect, describe, it, jest } from '@jest/globals';

describe('DashBoardNavigationList', () => {
  const history = createMemoryHistory();
  const route = '/:slug-portfolio';
  history.push(route);
  it('should render successfully', () => {
    const { baseElement } = render(
      <Router history={history}>
        <DashBoardNavigationList />{' '}
      </Router>
    );
    expect(baseElement).toBeTruthy();
  });
});
