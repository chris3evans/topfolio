import { render } from '@testing-library/react';

import SingleProject from './single-project';

describe('SingleProject', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SingleProject />);
    expect(baseElement).toBeTruthy();
  });
});
