import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import DashBoardNavigation from './dash-board-navigation';
import { expect, describe, it, jest } from '@jest/globals';

describe('DashBoardNavigation', () => {
  it('should render successfully', () => {
    const history = createMemoryHistory();
    const route = '/:slug-portfolio';
    history.push(route);
    const { baseElement } = render(
      <Router history={history}>
        <DashBoardNavigation />{' '}
      </Router>
    );
    expect(baseElement).toBeTruthy();
  });
});
