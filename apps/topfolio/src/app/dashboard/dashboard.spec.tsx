import { render } from '@testing-library/react';
import { expect, describe, it, jest } from '@jest/globals';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Dashboard from './dashboard';

describe('Dashboard', () => {
  it('should render successfully', () => {
    const history = createMemoryHistory();
    const route = '/dashboard';
    history.push(route);
    const { baseElement } = render(
      <Router history={history}>
        <Dashboard />{' '}
      </Router>
    );
    expect(baseElement).toBeTruthy();
  });
});
