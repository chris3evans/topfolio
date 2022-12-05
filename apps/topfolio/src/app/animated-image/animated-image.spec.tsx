import { render } from '@testing-library/react';

import AnimatedImage from './animated-image';

describe('AnimatedImage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AnimatedImage />);
    expect(baseElement).toBeTruthy();
  });
});
