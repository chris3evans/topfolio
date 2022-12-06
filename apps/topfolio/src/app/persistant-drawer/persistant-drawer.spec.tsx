import { render } from '@testing-library/react';

import PersistantDrawer from './persistant-drawer';

describe('PersistantDrawer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PersistantDrawer />);
    expect(baseElement).toBeTruthy();
  });
});
