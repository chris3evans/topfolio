import { render } from '@testing-library/react';
import { expect, describe, it, jest } from '@jest/globals';

import FormLayout from './form-layout';
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

describe('FormLayout', () => {
  const history = createMemoryHistory();
  const route = '/:slug-portfolio';
  history.push(route);
  it('should render successfully', () => {
    const { baseElement } = render(
      <Router history={history}>
        <FormLayout />{' '}
      </Router>
    );
    expect(baseElement).toBeTruthy();
  });
});
