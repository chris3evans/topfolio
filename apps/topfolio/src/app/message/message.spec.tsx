import { render } from '@testing-library/react';

import Message from './message';

describe('Message', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Message />);
    expect(baseElement).toBeTruthy();
  });
});
